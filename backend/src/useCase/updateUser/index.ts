import { UpdateUsersController } from "./updateUsersController";
import { UpdateUsersUseCase } from "./updateUsersUseCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const updateUsersUseCase = new UpdateUsersUseCase(userRepository);
const updateUsersController = new UpdateUsersController(updateUsersUseCase);

export {updateUsersUseCase, updateUsersController};