import { Express, Request, Response, } from "express";

export default function routes(app:Express){

    app.get('/healthcheck',(req:Request, res:Response)=>res.sendStatus(200).json('og no'));

    app.get('/',(req:Request,res:Response)=>{res.send("Server is connected to you")});
   
    app.get('/register',(req:Request,res:Response)=>{res.send("Rescieved from server")});
    app.post('/register',(req:Request,res:Response)=>{res.send(req.body)});
}




