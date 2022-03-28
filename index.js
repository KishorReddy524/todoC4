const express =require("express");

const usersController = require("./controller/user.controller")
const todosController = require("./controller/todo.controller")
const app = express;

app.use(express.json());

app.use("/users",usersController);
app.use("/todos",todosController);


module.exports =app;