const getMessage = async (req, res) => {
    res.send("Hello motherFucker, I am the controller");
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