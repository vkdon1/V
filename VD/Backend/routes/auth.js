const express = require("express");
const router = express.Router();

// Route for '/'
router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
