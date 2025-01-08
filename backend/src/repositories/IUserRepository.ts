import { User } from "../types/User"

export interface IUserRepository{
    findAll():Promise<User[]>
    createUser(user:User):Promise<unknown>
    findByCPF(cpf:string):Promise<User | null>
    findByEmail(email:string):Promise<User | null>
}