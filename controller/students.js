const express=require("express");
//const nodemailer = require('nodemailer');

const { Auth,LoginCredentials } = require("two-step-auth");
const StudentInformation=require("../models/info.js");
const StudentModel=require("../models/Student.js");

async function login(emailId){
    try {
    const res = await Auth(emailId, "Company Name");
    console.log(res);
}catch(err) {
        console.log(err);
    }
}
LoginCredentials.mailID="gouthamkrishna543@yahoo.com";
LoginCredentials.password="8778Gout.";
LoginCredentials.use=true;
const addStudent=async(req,res)=>{
    try {
    const {rollNo,name,emailid}=req.body;
    console.log(req.body);
   
   login(JSON.stringify(emailid));
      
   const newStudent=new StudentModel({
     name,
     rollNo,
     emailid
   })
   await newStudent.save();
   res.status(200).json(newStudent); }
   catch(err) {
    res.status(400).json(err);
   }
}

const studentInformation=async(req,res)=>{
  const {rollNo,FatherName,city}=req.body;

  try {
const studentRollNo=await (await StudentModel.find({rollNo:rollNo}).populate("info"))
;
    if(studentRollNo) {
        const information=new StudentInformation({
            rollNo,
            FatherName,
            city
        })
        await information.save();
        
        res.status(200).json(information);
    }
    
  }catch(err) {
    res.status(400).json(err);
  }
}

module.exports={
    addStudent,
    studentInformation
}