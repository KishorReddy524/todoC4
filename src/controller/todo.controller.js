const express = require("express"); 

const todo = require("../models/todo.models");

const router = express.Router();

 
router.get("", async (req, res) => {
  try {
    const Todos = await Todo.find()
       
      .populate({
        path: "userId",
        select: { firstName: 1, email: 1, _id: 0 },
      })
      .lean()
      .exec();

    return res.status(200).send(Todos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
 

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.id)
      .populate({ path: "userId", select: ["email"] })
      .lean()
      .exec();

    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({ path: "userId", select: ["firstName"] })
      .lean()
      .exec();

    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
 

module.exports = router;
