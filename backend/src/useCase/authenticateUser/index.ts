import {UserRepository } from "../../repositories/implementations/UserRepository";
import Authentication from "./authentication";

let userRepository = new UserRepository();
let authentication = new Authentication(userRepository);

export { authentication };