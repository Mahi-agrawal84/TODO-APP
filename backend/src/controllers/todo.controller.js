const Todo=require("../models/todo.model")
const createTodo = async (req,res)=>{
    try{
        const todo= await Todo.create(req.body)
        return res.status(201).json({"message":"respond successfully", "data": todo})

    }catch(error){
        res.status(500).json({"error":error.message})
    }
   
}

const getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find();
        return res.status(200).json({"message":"fetch successfully", "data": todo})
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

const updateTodo = async(req,res) => {
    try{
        const{ id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);

        res.status(200).json({ message: "todo updated", data: updatedTodo})
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

const deleteTodo = async(req,res) => {
    try{
        const{ id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json({ message: "deleted successfully"})
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

module.exports = { 
    createTodo, 
    getTodos, 
    updateTodo, 
    deleteTodo 
};
