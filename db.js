import mongoose from "mongoose";

const connectToDB= () => {
   try {
        mongoose.connect(process.env.mongooseConnectURI).then(res =>{
            console.log("Connected to the mongoDB");
        })
   } catch (error) {
        console.log("Error in connection to the database",error);
   }
}

module.exports = {connectToDB}