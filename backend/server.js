const app=require("./src/app")

const PORT=8000

const connectDB = require("./src/config/db")
connectDB()
app.listen(PORT, ()=>{
    console.log(`server is running on port:${PORT}`)
})