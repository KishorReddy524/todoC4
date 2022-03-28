const express = require("express"); 

const user = require("../models/user.models");

const router = express.Router();

 
router.get("", async (req, res) => {
  try {
    const Users = await User.find()
       
      .populate({
        path: "userId",
        select: { firstName: 1, email: 1, _id: 0 },
      })
      .lean()
      .exec();

    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
 

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
      .populate({ path: "userId", select: ["email"] })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({ path: "userId", select: ["firstName"] })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
 

module.exports = router;
