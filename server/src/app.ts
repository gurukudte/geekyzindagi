import express from "express";
import { Request, Response } from "express";
import cors from 'cors';
import connect from "./utils/connect";
import routes from "./utils/routes";
import mongoose from "mongoose";

const app = express();
app.use(cors())

app.listen(1337, async () => {
  console.log(`server RUNNING @http://localhost:1337`);
  routes(app)
  // await connect();
  
});

