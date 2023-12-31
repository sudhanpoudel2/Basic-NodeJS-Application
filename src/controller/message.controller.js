// import Message from '../model/message.model'
const Message = require('../model/message.model.js')

const getMessage = async (req, res) => {
     const message = await Message.find({});
     res.send(200).json(message);
};

const putMessage = async (req, res) => {
    res.send("PUT request received");
};

const postMessage = async (req, res) => {
    res.send("POST request received");
};

const deleteMessage = async (req, res) => {
    res.send("DELETE request received");
};

export default { getMessage, putMessage, postMessage, deleteMessage };