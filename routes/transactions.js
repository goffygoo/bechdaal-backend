const express = require("express");
const router = express.Router();

// const validateJobInput = require("../../validation/jobPosting");

const Transaction = require("../models/Transaction");

router.post("/addTransaction", async (req, res) => {
  try {
    const newTransaction = new Transaction({
      userId: req.body._id,
      mobile: req.body.number,
      address: req.body.address,
      type: req.body.type,
      quantity: req.body.quantity,
      costPerKG: req.body.rate,
      images: req.body.images
    });

    savedJob = await newTransaction.save();

    res.status(200).send(savedJob);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    await Transaction.find()
      .then((transactions) => res.json(transactions))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});

router.get("/admin", async (req, res) => {
  try {
    await Transaction.find({isApproved: false})
      .then((transactions) => res.json(transactions))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});



router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Transaction.findById(id)
      .then((job) => res.json(job))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});

router.get("/status/:userId", async (req, res) => {
  const id = req.params.userId;
  console.log(id);
  try {
    const data = await Transaction.find({ userId: id });
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/delTransaction/:id", async (req, res) => {
  try {
    const delTransaction = await Transaction.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(delTransaction);
  } catch (error) {
    console.log(error);
  }
});

router.post("/approveTransaction/:id", async (req, res) => {
  try {
    const updatedJob = await Transaction.updateOne(
      { _id: req.params.id },
      { $set: { isApproved: true } }
    );

    res.status(200).json(updatedJob);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

//images: req.body.images,
