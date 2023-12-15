import Message from '../model/message.model.js';

const getMessage = async (req, res) => {
    try {
      const messages = await Message.find({});
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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