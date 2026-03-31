const express=require("express");

const router=express.Router();
const{getTodos,createTodo,updateTodo,deleteTodo}=require("../controllers/todo.controller")
const showLog = require("../middleware/log.middleware");
const { validateTodo } = require("../middleware/validateTodo.middleware");

router.get("/", showLog ,getTodos)
router.post("/",validateTodo,createTodo)
router.put("/:id",updateTodo);
router.delete("/:id",deleteTodo);

module.exports=router;