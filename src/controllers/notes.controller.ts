import { Request, Response } from "express";
import { notesServices } from "../services";

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
      console.error(error);
    }
  },
  createNote: async (req_: Request, res: Response) => {
    try {
      const note = await notesServices.createNote(req_.body);
      res.status(200).json(note);
    } catch (error) {
      console.error(error);
    }
  },
};
