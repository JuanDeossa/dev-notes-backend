import { Router } from "express";
import { notesController } from "../controllers";
import { notesValidator } from "../middlewares/notesValidator.middleware";

export const notesRouter = Router();
notesRouter
  .get("", notesController.getNotes)
  .get("/:id", notesController.getNote)
  .post(
    "",
    (req, res, next) => notesValidator(req, res, next),
    notesController.createNote
  );
