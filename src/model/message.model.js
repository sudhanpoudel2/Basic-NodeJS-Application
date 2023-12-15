// import { Schema, model } from "mongoose";

// const messageSchema = Schema(
//     {
//         text: {
//             type: String,
//             required: true
//         }
//     }
//     );

//   const Message = model("Message", messageSchema);
//   export default Message


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }, 
    match: {type: Schema.Types.ObjectId, ref: 'match'},
});

module.exports = Message = mongoose.model('Message', messageSchema);
  




