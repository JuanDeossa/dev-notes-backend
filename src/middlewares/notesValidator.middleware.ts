import { ZodError } from "zod";
import { createNoteSchema } from "../schemas/createNote.schema";
import { Request, Response, NextFunction } from "express";

export const notesValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    createNoteSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((e) => ({
          field: e.path,
          message: e.message,
        }))
      );
    }
  }
};
