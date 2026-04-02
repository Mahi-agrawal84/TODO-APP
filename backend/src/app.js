const express=require("express")

const app=express()
 
const todoRoutes=require("./routes/todo.routes")
const session=require("express-session")
const cookieParser=require("cookie-parser")

app.use(express.json())

app.use(cookieParser());

app.get("/set-cookie",(req,res)=>{
    res.cookie("name","John Doe");
    res.send("Cookie has been set")
}); 

app.get("/get-cookie",(req,res)=>{
    res.json(req.cookies);
});

app.use(session({
    secret : "mysecretkey",
    resave : false,
    saveUninitialized : true,
}))

app.use("/api/todos", todoRoutes)

app.post("/login",(req,res)=>{
    const {username}=req.body; 
    req.session.user=username;
    res.send("user logged in")
});
 
app.get("/profile",(req,res)=>{
    if(!req.session.user){
     return res.status(401).send("user not logged in")
        
    }
    res.send(`Welcome ${req.session.user}`)
    
})

app.get("/logout",(req,res)=>{
    req.session.destroy()
    return res.send("user logged out" )
})

module.exports=app; 