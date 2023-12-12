import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        }
    },
    { timestamps: true });

const Message = model.Schema("Message", messageSchema);

export default Message;

