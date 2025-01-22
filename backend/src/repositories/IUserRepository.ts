import { User } from "../types/User"

export interface IUserRepository{
    findAll():Promise<User[]>
    createUser(user:User):Promise<unknown>
    findByCPF(cpf:string):Promise<User | null>
    findByEmail(email:string):Promise<User | null>
    updateUser(id:string,user:User): Promise<unknown>
    findById(id:string):Promise<User | null>
    deleteUser(id:string):Promise<void>
}