import { Request, Response } from "express";
import { notesServices } from "../services";
import { CreateNote } from "../models/note.interface";
import { CustomError } from "../interfaces/customError.interface";

export const notesController = {
  getNotes: async (req_: Request, res: Response) => {
    try {
      const notes = await notesServices.getNotes();
      res.status(200).json(notes);
    } catch (error) {
      console.error(error);
    }
  },
  getNote: async (req_: Request, res: Response) => {
    try {
      const note = await notesServices.getNote(req_.params.id);
      res.status(200).json(note);
    } catch (error) {
      if (error instanceof Error) {
        const message = "Note not found";
        if (error.message === message) {
          res.status(404).json({ message });
        } else {
          res.status(500).json({ message: "Internal server error" });
        }
      }
    }
  },
  createNote: async (req_: Request, res: Response) => {
    const body: CreateNote = req_.body;
    // const { title, content, images } = body;
    try {
      const note = await notesServices.createNote(body);
      res.status(200).json(note);
    } catch (error) {
      console.error(error);
    }
  },
};
