
import { Passero_One } from "next/font/google";
import {email, z} from "zod";

export const usernameValidation=z
    .string()
    .min(2,"username must be 2 characters")
    .max(20,"username not be greater then 20 characters")
    .regex(/^[a-zA-Z0-9]+$/,"username must not contain special character")

export const signupSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid email addrress"}),
    Password:z.string().min(6,{message:"password must be at least 6 characters"})
})