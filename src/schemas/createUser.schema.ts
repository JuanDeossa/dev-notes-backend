import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("Debe de ser un correo valido"),
  password: z
    .string()
    .min(6, "La contraseña debe ser mayor a 6 caracteres")
    .max(15, "La contraseña debe ser menor a 15"),
});
