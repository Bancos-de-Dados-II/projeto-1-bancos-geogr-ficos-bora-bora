import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(id:string){
        let user= await this.userRepository.deleteUser(id);
        return "User deleted sucessfully!";
    }
}