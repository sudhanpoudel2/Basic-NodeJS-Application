import dotenv from "dotenv";
import express from "express";
import {router} from './router/message.router.js';
import connectToDB from "./db.js";

dotenv.config({
    path: "./.env"
});

const app = express();
const port = 3000;

app.use('/', router);

connectToDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

 
