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
    con.query("use saket1");
    return con;
}

export default connectDB;