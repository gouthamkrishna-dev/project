const express =require("express");
const mongoose =require("mongoose");
const app=express();
app.use(express.json());
app.use("/",require("./routers/routes.js"))
const connect=async()=>{
    try {
    await mongoose.connect("mongodb+srv://gouthamkrishna:8778Gout.@cluster0.ylppcwh.mongodb.net/?retryWrites=true&w=majority")
    }catch {
        console.log("error");
    }
}

app.listen(5001,()=>{
    connect();
    console.log("successfully connected");
})