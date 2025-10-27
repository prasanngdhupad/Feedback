import { z } from 'zod'; 

export const UsernameValidation=z
    .string()
    .min(2,"username must be minimum 2 characters")
    .max(20,"username must be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special charater")


export const signUpSchema=z.object({
    username:UsernameValidation,
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(6,{message:"please provide more than 6 characters"})

})