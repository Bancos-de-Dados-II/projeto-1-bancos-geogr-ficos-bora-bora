import { FindUserUseCase } from "./findUserUseCase";
import { FindUserController } from "./findUserController";
import { UserRepository } from "../../repositories/implementations/UserRepository"; 

const userRepository = new UserRepository();
const findUserUseCase = new FindUserUseCase(userRepository);
const findUserController = new FindUserController(findUserUseCase);

export {findUserUseCase,findUserController}

