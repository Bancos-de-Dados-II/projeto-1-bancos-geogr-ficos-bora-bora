import { UserRepository } from "../../repositories/implementations/UserRepository";
import bcrypt from "bcryptjs";
import { User } from "../../types/User";

export class ChangePasswordUserUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(id:string,oldPassword:string,newPassword:string){
            let user = await this.userRepository.findById(id) as User;
            
            if(!user){
                throw Error("Usuário não encontrado!");
            }
            
            let passwordVerify =await bcrypt.compare(oldPassword,user.password);

            if(!passwordVerify){
                throw Error("Senha atual não corresponde ao usuário da conta!");
            }

            let password = await bcrypt.hash(newPassword,8) ;

            let newUser =  await this.userRepository.updateUser(id,{...user,password});

          
    }   
}