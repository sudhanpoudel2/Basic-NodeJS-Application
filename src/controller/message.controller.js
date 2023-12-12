//  import Message from "../model/message.model"

const getMessage = async (req,res) => {
    res.send("Hello motherFucker i am controller");
};
const putMessage = async (req,res) => {};
const postMessage = async (req,res) => {};
const deleteMessage = async (req,res) => {};

export default {getMessage,putMessage,postMessage,deleteMessage}