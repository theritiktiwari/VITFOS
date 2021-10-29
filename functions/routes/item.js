const express = require("express");
const admin = require("firebase-admin");
const { body, validationResult } = require("express-validator");
const fetchAdmin = require("../middleware/fetchAdmin");

const router = express.Router();
const db = admin.firestore();

// Router 1 - Get all the data of items
router.get("/get", async (req, res)=>{
    try {
        let items = [];
        const query = await db.collection("items").get();
        query.forEach(doc => {
            items.push({
                id: doc.id, 
                ...doc.data()
            });
        });
        res.json(items);
    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});

// Router 2 - Get the data of item by id
router.get("/get/:id", async (req, res) => {
    try {
        const query = await db.collection("items").doc(req.params.id).get();
        let item = {
            id: query.id,
            ...query.data()
        }
        res.json(item);
    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});

// Router 3 - Add the data of item
router.post("/add", fetchAdmin, [
    body("name", "Name cannot be less than 3 characters").isLength({ min: 3 }),
    body("price", "Price can be a number").isNumeric(),
    body("rating", "Rating can be a number between 1 to 5").isNumeric(),
    body("type", "Type cannot be less than 3 characters").isLength({ min: 3 }),
  ], async (req, res) => {
    
    // Return bad requests for errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ Error: error.array() });
    }

    try {
        const { name, price, rating, type } = req.body;
        const date = new Date();
        const listingDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

        let userID = req.admin.id;

        const savedItem = await db.collection("items").add({
            name,
            price,
            rating,
            type,
            listingDate,
            userID
        });
        res.send({msg: "Item added successfully", id: savedItem.id});
    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
  }
);


// ROUTER 3 - Update a item with id
router.put("/update/:id", fetchAdmin, [
    body("name", "Name cannot be less than 3 characters").isLength({ min: 3 }),
    body("price", "Price can be a number").isNumeric(),
    body("rating", "Rating can be a number between 1 to 5").isNumeric(),
    body("type", "Type cannot be less than 3 characters").isLength({ min: 3 }),
  ], async (req, res) => {

    // Return bad requests for errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ Error: error.array() });
    }

    const { name, price, rating, type } = req.body;
    try {
        const newItem = {};
        if(name){newItem.name = name}
        if(price){newItem.price = price}
        if(rating){newItem.rating = rating}
        if(type){newItem.type = type}

        // Find the item and update that
        const query = await db.collection("items").doc(req.params.id).get();

        if(query.exists){
            if(query.data().userID.toString() === req.admin.id){
                await db.collection("items").doc(req.params.id).update(newItem);
                return res.send({msg: "Item updated successfully"});
            }
            else{
                return res.status(401).send("Not Allowed");
            }
        } else {
            res.status(404).send({msg: "Item not found"});
        }

    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});


// ROUTER 4 - Delete an item with id 
router.delete("/delete/:id", fetchAdmin, async (req, res) => {

    try {
        // Find the note and delete that
        const query = await db.collection("items").doc(req.params.id).get();

        if(query.exists){
            if(query.data().userID.toString() === req.admin.id){
                await db.collection("items").doc(req.params.id).delete();
                return res.send({msg: "Item deleted successfully"});
            }
            else{
                return res.status(401).send("Not Allowed");
            }
        } else {
            res.status(404).send({msg: "Item not found"});
        }

    } catch (err) {
        res.status(500).send("Some Internal Error");
    }
});

module.exports = router;