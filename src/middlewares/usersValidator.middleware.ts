import { ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { createUserSchema } from "../schemas/createUser.schema";

export const usersValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    createUserSchema.parse(req.body);
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
