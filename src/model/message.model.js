import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        }
    },
    { timestamps: true });

  export const Message = model.Schema("Message", messageSchema);
  




