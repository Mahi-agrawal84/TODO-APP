const mongoose =require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
const connectDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected")

    }catch(error){
        res.status(500).json({"error":error.messege})
    }
    
}
module.exports=connectDB
