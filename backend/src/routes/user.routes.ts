import { Router } from "express";
import { findAllUsersController } from "../useCase/findAllUsers";
import { createUsersController } from "../useCase/createUser";
import { findUserController } from "../useCase/findUser";
import { updateUsersController } from "../useCase/updateUser";
import { deleteUserController } from "../useCase/deleteUser";

const router = Router();
// GET
router.get('/',(request,response)=>findAllUsersController.handle(request,response));
router.get('/:id',(request,response)=>findUserController.handle(request,response));

//POST
router.post('/createuser',(request,response)=>createUsersController.handle(request,response));

//PUT
router.put('/:id',(request,response)=>updateUsersController.handle(request,response));

//Delete
router.delete('/:id',(request,response)=>deleteUserController.handle(request,response));


export default router;
