const mongoose=require("mongoose");
const {Schema}=mongoose;

const studentModel=new Schema({
    name: {
        type:String,
        required:true
    },
    rollNo: {
        type:String,
        required:true
    },
    emailid: {
        type:String,
        required:true,
    },
    info:[{type:Object}]
    
})

module.exports=mongoose.model("Student",studentModel);