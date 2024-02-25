import express from "express";
import connectDB from "./db.js";


const app = express()

const con = connectDB();


app.post('/login',(req,res)=>{
    try {
        const { name , password } = req.body; 
        if(!name || !password){
            throw new Error("All fields are mandatory")
        }
    
        con.query(`select * from Customer where cust_name = ${name} and password = ${password}`,(err,result)=>{
            if (err) throw err;
            if (!result) throw new Error("Invalid Details")
            return res.status(200).json({result})
            
        })
    } catch (error) {
        console.log(error)
    }
    
})




app.listen(3500,()=>{
    console.log("Server listening on port " , 3500);
})