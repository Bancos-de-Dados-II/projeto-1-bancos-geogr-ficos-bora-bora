import { Router } from "express";
import { findAllUsersController } from "../useCase/findAllUsers";
import { createUsersController } from "../useCase/createUser";
import { findUserController } from "../useCase/findUser";
import { updateUsersController } from "../useCase/updateUser";
import { deleteUserController } from "../useCase/deleteUser";
import { saveImageUserController } from "../useCase/saveImageUser";
import { changePasswordUserController } from "../useCase/ChangePasswordUser";
import AuthMid from "../middlewares/authMid";
import upload from "../utils/multer";

const router = Router();
// GET
router.get('/',(request,response)=>findAllUsersController.handle(request,response));
router.get('/:id',(request,response)=>findUserController.handle(request,response));

//POST
router.post('/createuser',(request,response)=>createUsersController.handle(request,response));

//PUT
router.put('/',AuthMid.handle,(request,response)=>updateUsersController.handle(request,response));

//PATCH
router.patch('/upload-image',AuthMid.handle,upload.single("image"),(request,response)=>saveImageUserController.handle(request,response));
router.patch('/switch-password',AuthMid.handle,(request,response)=>changePasswordUserController.handle(request,response));

//Delete
router.delete('/',AuthMid.handle,(request,response)=>deleteUserController.handle(request,response));


export default router;
