const express = require("express");
const User = require("../models/user");
const router = express.Router();

// @route   GET localhost:5000/users
// @desc    get all users
// @access  Public
router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    res.send(Users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST localhost:5000/users
// @desc    Create user
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, surname, birthYear, birthPlace} = req.body;
    const user = new User({ name, surname, birthYear, birthPlace });
    const newuser = await user.save();
    res.send(newuser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE localhost:5000/users
// @desc    Delete user
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await User.findOneAndDelete({ _id: id });
    success ? res.json({ success: true }) : res.json({ success: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT localhost:5000/users
// @desc    update user
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } }
    );
    res.send(updateduser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;