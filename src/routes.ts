import { Router } from 'express';
import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateMessageController } from './controller/CreateMessageController';
import { GetLast3MessagesController } from './controller/GetLast3MessagesController';
import { ProfileUserController } from './controller/ProfileUserController';
import ensureAuthenticated from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile",ensureAuthenticated ,new ProfileUserController().handle)

router.get("/github",(req,res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

router.get("/signin/callback", (req,res)=>{
    const { code } = req.query;

    return res.json(code);
})

export { router }