// filepath: backend/src/routes/index.js
const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

// Define your routes here
router.get("/", (req, res) => {
  res.send("API is running...");
});

// User routes
router.post("/users", createUser);
router.get("/users", getUsers);

module.exports = router;
