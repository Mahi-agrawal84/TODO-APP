const express=require("express");

const router=express.Router();
const{getTodos,createTodo,updateTodo,deleteTodo}=require("../controllers/todo.controller")
const showLog = require("../middleware/log.middleware");
const { validateTodo } = require("../middleware/validateTodo.middleware");
const auth = require("../middleware/auth.middleware");

router.get("/", showLog ,getTodos)
router.post("/",auth,validateTodo,createTodo)
router.put("/:id",auth,updateTodo);
router.delete("/:id",auth,deleteTodo);

module.exports=router; 