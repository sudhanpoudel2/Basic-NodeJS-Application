
import express from "express";
import connectToDB from "./db.js";

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    console.log("Hello World!");
    res.send("Hey motherfucker");

});

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
});