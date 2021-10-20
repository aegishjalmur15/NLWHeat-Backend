import {Request, Response} from 'express';
import { GetLast3MessagesServices } from '../services/GetLast3MessagesService';

class GetLast3MessagesController{
    async handle(req: Request,res: Response){

        const getLast3MessagesService = new GetLast3MessagesServices();

        const result = await getLast3MessagesService.execute();

        return res.json(result)
    }
}

export { GetLast3MessagesController }