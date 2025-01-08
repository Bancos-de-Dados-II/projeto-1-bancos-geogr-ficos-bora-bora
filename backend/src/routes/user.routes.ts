import { Router } from "express";
import { findAllUsersController } from "../useCase/findAllUsers";
import { createUsersController } from "../useCase/createUsers";

const router = Router();

router.get('/',(request,response)=>findAllUsersController.handle(request,response));
router.post('/createuser',(request,response)=>createUsersController.handle(request,response));

export default router;
