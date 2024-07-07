import { PrismaClient } from "@prisma/client";
import { CreateNote } from "../models/note.interface";

const Prisma = new PrismaClient();

export const notesServices = {
  getNotes: async () => {
    const allNotes = await Prisma.note.findMany();
    return allNotes;
  },
  getNote: async (id: string) => {
    const note = await Prisma.note.findUnique({ where: { id } });
    if (!note)
      throw new Error("Note not found");
    return note;
  },
  createNote: async (note: CreateNote) => {
    const createdNote = await Prisma.note.create({
      data: {
        userId: note.userId,
        title: note.title,
        content: note.content,
        images: note.images,
      },
    });
    return createdNote;
  },
};
