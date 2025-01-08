import { FindAllUsersController } from "./findAllUsersController";
import { FindAllUsersUseCase } from "./findAllUsersUseCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";


const userRepository = new UserRepository();
const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
const findAllUsersController =  new FindAllUsersController(findAllUsersUseCase);

export {findAllUsersUseCase, findAllUsersController};