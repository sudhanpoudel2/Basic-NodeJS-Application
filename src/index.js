import express from "express";
import { router } from './router/message.router.js';
import dotenv from 'dotenv';

const app = express();
const port = 5000;

dotenv.config();

app.get('/', (req, res) => {
  console.log('Root endpoint hit');
  res.send('Hello Sudhan, I am Saransh');
});

app.use('/message', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
