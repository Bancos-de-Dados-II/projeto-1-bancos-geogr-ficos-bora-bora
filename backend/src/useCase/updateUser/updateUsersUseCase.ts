import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";

export class UpdateUsersUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(data:any, id:string){
        let user = await this.userRepository.findById(id) as User;
        const updateUser: User ={
                id:user.id,
                name:data.name || user.name,
                cpf:data.cpf || user.cpf,
                email:data.email || user.email,
                foto:data.foto || user.foto,
                idade:data.idade || user.idade,
                password:user.password,
                telefone:data.telefone || user.telefone
        }
        if(data.idade >= 18){
            updateUser.organizador = true;
        }else{
            updateUser.organizador = false;
        }
        
        await this.userRepository.updateUser(id,updateUser);

        return updateUser;
    }
}