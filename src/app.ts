//importações
import "dotenv/config";
import Express, {Request,Response,NextFunction} from 'express';
import http from "http";
import { Server } from "socket.io"
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";



const app = Express();
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors:{
        origin:"*",
    }
});

app.use(Express.json());
app.use(router);

//User a error handler
app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.json({message: err.message}).status(400)
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})



export { serverHttp, io }