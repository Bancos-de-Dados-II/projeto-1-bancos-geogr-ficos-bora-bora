import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUsersUseCase } from "./createUsersUseCase";
import { CreateUsersController } from "./createUsersController";
import * as bcrypt from "bcryptjs";

const userRepository = new UserRepository();
const createUsersUseCase = new CreateUsersUseCase(userRepository);
const createUsersController = new CreateUsersController(createUsersUseCase);

export {createUsersUseCase,createUsersController};

