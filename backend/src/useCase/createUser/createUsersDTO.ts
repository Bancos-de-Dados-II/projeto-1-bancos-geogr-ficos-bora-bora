import { z } from "zod";
import { verificationCPF } from "../../utils/verificationCPF";

//Função para validar o telefone - ter que arrumar
const validatePhone = (phone:string) => {
    const phoneValidate = /^(\+\d{1,2}\s?)?(\()?\d{2,4}(\))?\s?(\d{4,5}(-|\s)?\d{4})$/;
    const isValid = phoneValidate.test(phone);
    return isValid;
}

//Função para validar o cpf - ter que arrumar
const validateCPF=(cpf:string)=>{
    const cpfRegex = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[\-][0-9]{2}/;
    const isValid = cpfRegex.test(cpf);

    if(isValid){
        return verificationCPF(cpf);
    }

    return false;
    
}

export const CreateUserDTO = z.object({

    name:z.string({
        required_error:"Name is required",
        invalid_type_error:"Name must be a string",
    }).min(5).max(255).refine(data => !!data, { message: 'The name is mandatory' }),

     email:z.string({
        required_error:"E-mail is required",
        invalid_type_error:"E-mail must be a string",
     }).email('Invalid email adress').refine(data => !!data, { message: 'The email is mandatory' }),

     password:z.string({
        required_error:"Password is required",
        invalid_type_error:"Password must be a string",
     }).min(4).max(255).refine(data => !!data, { message: 'The password is mandatory' }),

     cpf:z.string().min(11).max(14).refine(data => validateCPF(data),{message:'Invalid cpf'}).optional(),

     foto:z.string().optional(),

     telefone:z.string()
     .refine(data => validatePhone(data), { message: 'Invalid telephone number' }).optional(),

     idade:z.number().int().positive().optional(),

     organizador:z.boolean().optional()
})