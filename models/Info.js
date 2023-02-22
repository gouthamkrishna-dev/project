const mongoose=require("mongoose");
const {Schema}=mongoose;

const StudentInformation=new Schema( {
    rollNo: {
        type:String,
        require:true,

    },
    FatherName: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Info",StudentInformation);