import express from "express";
import connectDB from "./db.js";
import cors from "cors"

const app = express()

const con = connectDB();

app.use(cors())
app.use(express.json())
// app.get('/')

app.post('/login',(req,res)=>{
    console.log("Post request received");
    try {
        console.log(req.body);
        const { cust_id , password } = req.body; 
        if(!cust_id || !password){
            throw new Error("All fields are mandatory")
        }
    
        con.query(`select * from Customer where cust_id = ${cust_id} and password = ${password}`,(err,result)=>{
            if (err) throw err;
            if (!result) throw new Error("Invalid Details")
            return res.status(200).json({status : 200 , data: result})
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({status: 500,message:error.message})
    }  
})




app.listen(3500,()=>{
    console.log("Server listening on port " , 3500);
})