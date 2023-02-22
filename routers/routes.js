const express=require("express");
const {addStudent,studentInformation}=require("../controller/students.js")
const router=express.Router();

router.post("/",addStudent);

router.post("/info",studentInformation)

module.exports=router;