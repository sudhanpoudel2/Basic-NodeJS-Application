import { Router } from "express"; 
import * as messageController from '../controller/message.controller.js'  

const router = Router();

router.route('/message')
.get(messageController.getMessage)
.put(messageController.putMessage)
.post(messageController.postMessage)
.delete(messageController.deleteMessage);
module.exports={router};