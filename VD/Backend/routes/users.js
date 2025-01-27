const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sec_code = "vallabyh@123";

// Route for '/' for create a new user
router.post("/", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const old_user = await User.findOne({ email: email });
    if (old_user) {
      return res.status(200).send("user with ihis email is alerady exist");
    }

    const salt = await bcrypt.genSalt(5);
    const sec_password = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      phone,
      password: sec_password,
    });
    const Data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(Data, sec_code);
    res.json({
      msg: "user created suceesfully",
      data: token,
      user_id: user.id,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
});

// route 2 for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("user not present with this email id");
    }
    const isvalid_user = await bcrypt.compare(password, user.password);
    if (isvalid_user) {
      return res.status(200).json({
        msg: "user login successfully",
        // token_ID: user.generateToken(),
        user_id: user.id,
      });
    }
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
