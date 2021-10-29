const express = require("express");
const admin = require("firebase-admin");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchAdmin = require("../middleware/fetchAdmin");

const router = express.Router();
const db = admin.firestore();


// ROUTE 1 - Crete a new admin
router.post("/create", [
    body("name", "Name cannot be less than 3 characters").isLength({min: 3}),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be less than 8 characters").isLength({min: 8})
], async (req,res)=>{
    let success = false;
    // Return bad requests for errors
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({success, Error: error.array()});
    }

    try{
        // Check the user exist
        const query = await db.collection("admin").where("email", "==", req.body.email).get();
        if(query.empty){
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user
            const user = await db.collection("admin").add({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                timestamp: new Date()
            });

            // Return success
            success = true;
            return res.status(200).json({success, user});
        }else{
            // Return error
            return res.status(400).json({success, Error: "User already exist"});
        }
    }catch(err){
        res.status(500).send("Some Internal Error");
    }
})


// ROUTE 2 - Authenticate admin login details
router.post("/login", [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists()
], async (req,res) => {
    let success = false;
    // Return bad requests for errors
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({Error: error.array()});
    }

    try {
        const query = await db.collection("admin").where("email", "==", req.body.email).get();
            if(!query.empty){
            // Check the password
            const id = query.docs[0].id;
            const user = query.docs[0].data();
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(isMatch){
                const data = {
                    id: id
                }
                
                const authAdmin = jwt.sign(data, process.env.JWT_SECRET_KEY);
                success = true;
                res.json({success, authAdmin});
            }else{
                // Return Error
                return res.status(400).json({success, Error: "Invalid Credentials"});
            }
        }else{
            // Return Error
            return res.status(400).json({success, Error: "Invalid Credentials"});
        }
    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});

// ROUTE 3 - Get loggedin admin details
router.post("/get", fetchAdmin, async (req,res) => {
    try {
        let userID = req.admin.id;
        let user = await db.collection("admin").doc(userID).get();
        
        user = user.data();
        delete user.password;
        res.send(user);
    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});

module.exports = router;