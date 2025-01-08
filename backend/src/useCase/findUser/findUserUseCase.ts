import { IUserRepository } from "../../repositories/IUserRepository";

export class FindUserUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(id:string){
        let user =  await this.userRepository.findById(id);
        return user;
    }
}