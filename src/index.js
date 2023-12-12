import dotenv from "dotenv";
import express from "express";
import connectToDB from "./db.js";
// import router from './router/message.router.js'; // Use import for the router

dotenv.config({
    path: "./.env"
});

const app = express();
const port = 3000;

connectToDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

// app.use('/', router);
