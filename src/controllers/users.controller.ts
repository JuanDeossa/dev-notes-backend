import { Request, Response } from "express";
import { CreateUser } from "../models/user.interface";
import { usersServices } from "../services/users.services";

export const usersController = {
  // getNotes: async (req_: Request, res: Response) => {
  //   try {
  //     const notes = await notesServices.getNotes();
  //     res.status(200).json(notes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  // getNote: async (req_: Request, res: Response) => {
  //   try {
  //     const note = await notesServices.getNote(req_.params.id);
  //     res.status(200).json(note);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       const message = "Note not found";
  //       if (error.message === message) {
  //         res.status(404).json({ message });
  //       } else {
  //         res.status(500).json({ message: "Internal server error" });
  //       }
  //     }
  //   }
  // },
  createUser: async (req_: Request, res: Response) => {
    const body: CreateUser = req_.body;
    // const { email, password } = body;
    try {
      const user = await usersServices.createUser(body);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  },
  login: async (req_: Request, res: Response) => {
    const body: CreateUser = req_.body;
    // const { email, password } = body;
    try {
      const user = await usersServices.login(body);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  },
};
