import { z } from "zod";

export const createPatientsSchema = z.object({
    firstname : z.string(),
    lastname : z.string(),
    gender : z.enum(['Male', 'Female','Transgender','Others', 'Preferred not to Say', 'unknown']).optional(),
    age : z.string(),
    maritalStatus : z.enum([
        'Single', 'Married', 'Divorced', 'Widowed', 'Other', 'unknown'
    ]).optional(),
    nationality : z.string().optional(),

    mobile : z.string(),
    email : z.string().email({
        message : "Enter a valid email address",
    }),
    emergency : z.object({
        fullname : z.string(),
        relationship : z.string(),
        contact : z.string()
    }).optional(),

    bloodgroup : z.enum([
        'A+ve', 'A-ve', 'B+ve', 'B-ve', 'AB+ve', 'AB-ve', 'O+ve', 'O-ve', 'unknown'
    ]).optional(),
    allergies : z.array(z.object({
        allergy : z.string()
    }).optional()),

    medicalhistory : z.string().optional(),
    medications : z.array(z.object({
        med : z.string().optional()
    })),
    surgicalHistory : z.string().optional(),
    familyhistory : z.string().optional(),
    badhabits : z.string().optional(),
});