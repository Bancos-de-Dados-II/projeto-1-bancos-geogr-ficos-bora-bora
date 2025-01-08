import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";
import bcrypt from "bcryptjs";

export class CreateUsersUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(data:any){

        const verificationCPF = await  this.userRepository.findByCPF(data.cpf);
        const verificationEmail=await  this.userRepository.findByEmail(data.email);


        
        if(verificationCPF){
            throw new Error("CPF existente, por favor informe outro!");
        }

        if(verificationEmail){
            throw new Error("Email existente, por favor informe outro!");
        }

        if(data.idade >= 18){
            data.organizador = true;
        }else{
            data.organizador=false;
        }

        
        const password =  await bcrypt.hash(data.password,8);

        const newUser = new User({
            ...data,
            password
        })

        const result = await this.userRepository.createUser(newUser);

        return result;
    }
}