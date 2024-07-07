import { z } from "zod";

export const createNoteSchema = z.object({
  title: z
    .string()
    .min(3, "El tiúlo debe ser mayor a 3 caracteres")
    .max(40, "El tiúlo debe ser menor a 40 caracteres"),
  content: z
    .string()
    .min(3, "La descripción debe ser mayor a 3 caracteres")
    .max(100, "La descripción debe ser menor a 100 caracteres"),
  userId: z.string().uuid("Debe de ser un UUID"),
  images: z.array(z.string()).optional(),
});
