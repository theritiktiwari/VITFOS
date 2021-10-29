const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const path = require("path");
const cors = require("cors");
const serviceAccount = require("./serviceAccount.json");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors({origin: true}));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

// Used Routes
app.use("/admin", require("./routes/admin"));
app.use("/items", require("./routes/item"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

exports.api = functions.https.onRequest(app);
