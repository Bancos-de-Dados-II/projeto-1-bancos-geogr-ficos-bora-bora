import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ChangePasswordUserController } from "./changePasswordUserController";
import { ChangePasswordUserUseCase } from "./changePasswordUserUseCase";


const userRepository = new UserRepository();
const changePasswordUserUseCase = new ChangePasswordUserUseCase(userRepository);
const changePasswordUserController = new ChangePasswordUserController(changePasswordUserUseCase);

export {changePasswordUserUseCase,changePasswordUserController};