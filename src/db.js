import mongoose from "mongoose";

const connectToDB = async ()=> {
        await mongoose.connect(process.env.mongooseConnectURI).then(res =>{
            console.log("Connected to the mongoDB");
        })
    .catch ((e)=> {
        console.log("Error in connection to the database");
        console.log(e); 
   });
}

export default connectToDB;