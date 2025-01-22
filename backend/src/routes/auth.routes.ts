import { authentication } from "../useCase/authenticateUser";
import { Router } from "express";

const router = Router();

router.post('/login',(request,response)=>authentication.handle(request,response));

export default router;