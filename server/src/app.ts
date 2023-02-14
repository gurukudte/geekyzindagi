import express, { Router } from "express";
import helmet from "helmet";
import cors from 'cors';
import config  from "config";
import connect from "./utils/connect";
import router from './routes/index'

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

const port = config.get<number>('port');

app.listen(port, async () => {
  console.log(`Server RUNNING @http://localhost:${port}`);
  await connect();  
});


