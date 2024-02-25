import mysql from "mysql"
import fs from "fs"

const connectDB = ()=>{
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "800397"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return con;
}

export default connectDB;