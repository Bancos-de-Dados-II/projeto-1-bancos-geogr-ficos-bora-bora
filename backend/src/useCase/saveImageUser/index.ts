import { UserRepository } from "../../repositories/implementations/UserRepository";
import { SaveImageUserUseCase } from "./saveImageUserUseCase";
import { SaveImageUserController } from "./saveImageUserController";

const userRepository = new UserRepository();
const saveImageUserUseCase = new SaveImageUserUseCase(userRepository);
const saveImageUserController= new SaveImageUserController(saveImageUserUseCase);
 
export {saveImageUserUseCase,saveImageUserController};