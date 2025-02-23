import { z } from "zod";

export const RegisterSchema = z.object({
    firstname : z.string(),
    lastname : z.string(),
    email : z.string().email({
        message : "Enter a valid email address"
    }),
    password : z.string().min(6, {
        message : "Password too short"
    }).max(80, {
        message : "Exceeded the limits, shorten it"
    })
});

export type RegisterProps = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
    email : z.string().email({
      message : "Enter a valid email"
    }),
    password : z.string().min(6, {
      message : "Password is too short"
    }).max(120, {
      message : "Reached max limit"
    })
  });
  
export type LoginProps = z.infer<typeof LoginSchema>;