
import { User } from "../../types/User";
import UserModel from "../../database/model/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository{
    async findAll(): Promise<User[]> {
           
        let result=await UserModel.findAll();
        let users: User[] = [];

        result.forEach((user:any )=>{
            users.push(user);
        })

        return users;

    }

    async createUser(user: User): Promise<unknown> {
        const newUser =  await UserModel.create({
            ...user
        })
        return newUser;
    }

    async findByCPF(cpf: string): Promise<User | null> {
        const result = await UserModel.findOne({
            where:{
                cpf
            }
        })

        return result;
    }

    async findByEmail(email: string): Promise<User | null> {
        
            const result = await UserModel.findOne({
                where:{
                    email
                }
            })
    
            return result;
     
    }

    async updateUser(id:string,user: User): Promise<unknown> {
        let updateUser =  await UserModel.update({...user},{
            where:{
                id
            }
        })

        return updateUser ;
    }

    async findById(id: string): Promise<User | null> {
        let user = await UserModel.findOne({
            where:{
                id
            }
        })
        return user;
    }

    async deleteUser(id: string): Promise<void> {
        let user =  await UserModel.destroy({
            where:{
                id
            }
        })
    }

}