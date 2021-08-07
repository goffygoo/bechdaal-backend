const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res) => {
  console.log("yo")
  res.send({ok: "ok"})
});

router.post("/addUser", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name                                                                                                                                                                                         ,
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,

    });

    savedJob = await newUser.save();

    res.status(200).send(savedJob);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await User.findById(id)
      .then((job) => res.json(job))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin' , (req, res) => {
    const data = req.body
    User.findOne({userName: data.user}).then(user => {
      if(user && user.password === data.password){
        res.status(200).send({user})
      } else res.status(404).send({data: false})
    }).catch(_err => {
      res.status(404).send({data: false})
    })
})

module.exports = router;
