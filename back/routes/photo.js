const express = require("express");
const Photo = require("../models/photo");
const router = express.Router();

// @route   GET localhost:5000/photos
// @desc    get all photos
// @access  Public
router.get("/", async (req, res) => {
  try {
    const photo = await Photo.find();
    res.send(photo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET localhost:5000/photos
// @desc    get photo with user_id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const photo = await Photo.find({ user_id: req.params.id });
    res.send(photo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST localhost:5000/photos
// @desc    create new photo (juste pour test sur postman)
// @access  Public
router.post("/:id", async (req, res) => {
  
  try {
    const { id } = req.params;
    const photo = new Photo({  ...req.body });
    
    const newPhoto = await photo.save({user_id:id});
    res.send(newPhoto);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE localhost:5000/photos
// @desc    delete photo
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await Photo.findOneAndDelete({ _id: id });
    success ? res.json({ success: true }) : res.json({ success: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Put localhost:5000/photos
// @desc    update an photo
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedphoto = await Photo.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } }
    );
    res.send(updatedphoto);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;