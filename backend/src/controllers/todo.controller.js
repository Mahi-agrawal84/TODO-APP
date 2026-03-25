const Todo=require("../models/todo.model")
const createTodo = async (req,res)=>{
    try{
        const todo= await Todo.create(req.body)

    }catch(error){
        res.status(500).json({"error":error.message})
    }
   
}

const getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find();
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.exports={ createTodo, getTodos };
