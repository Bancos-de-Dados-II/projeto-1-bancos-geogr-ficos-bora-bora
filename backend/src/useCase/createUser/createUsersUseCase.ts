import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";
import bcrypt from "bcryptjs";

export class CreateUsersUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(data:any){


        if(data.cpf){
            const verificationCPF = await  this.userRepository.findByCPF(data.cpf);
            if(verificationCPF){
                throw new Error("CPF existente, por favor informe outro!");
            }
            
        }

        if(data.email){
            const verificationEmail=await  this.userRepository.findByEmail(data.email);
            if(verificationEmail){
                throw new Error("Email existente, por favor informe outro!");
            }
            
        }
      

        if(data.idade >= 18 && data.cpf){
            data.organizador = true;
        }else{
            data.organizador=false;
        }

        
        const password =  await bcrypt.hash(data.password,8);

        const newUser = new User({
            ...data,
            cpf:data.cpf? data.cpf : null,
            email:data.email? data.email : null,
            foto:data.foto? data.foto : null,
            idade:data.idade? data.idade : null,
            telefone:data.telefone? data.telefone : null,
            password
        })

        const result = await this.userRepository.createUser(newUser);

        return result;
    }
}