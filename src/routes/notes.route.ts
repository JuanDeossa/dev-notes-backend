import { Router } from "express";
import { notesController } from "../controllers";

export const notesRouter = Router();
notesRouter
  .get("", notesController.getNotes)
  .get("/:id", notesController.getNote)
  .post("", notesController.createNote);
