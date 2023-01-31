import express from "express";
import helmet from "helmet";
import cors from 'cors';
import config  from "config";
import connect from "./utils/connect";
import routes from "./utils/routes";

const app = express();
app.use(cors())
app.use(express.json())
app.use(helmet());

const port = config.get<number>('port');

app.listen(port, async () => {
  console.log(`Server RUNNING @http://localhost:${port}`);
  routes(app)
  // fetchData(); 
  await connect(); 
  
});

