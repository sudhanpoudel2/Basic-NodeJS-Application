import { Router } from "express";
import messageController from '../controller/message.controller.js';

const router = Router();

router.get('/', messageController.getMessage);
router.put('/', messageController.putMessage);
router.post('/', messageController.postMessage);
router.delete('/', messageController.deleteMessage);

export { router };