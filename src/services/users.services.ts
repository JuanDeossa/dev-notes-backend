import { PrismaClient } from "@prisma/client";
import { CreateUser } from "../models/user.interface";

const Prisma = new PrismaClient();

export const usersServices = {
  // getNotes: async () => {
  //   const allNotes = await Prisma.user.findMany();
  //   return allNotes;
  // },
  // getNote: async (id: string) => {
  //   const note = await Prisma.note.findUnique({ where: { id } });
  //   if (!note)
  //     throw new Error("Note not found");
  //   return note;
  // },
  createUser: async (note: CreateUser) => {
    const createdUser = await Prisma.user.create({
      data: {
        email: note.email,
        password: note.password,
      },
    });

    if (!createdUser) throw new Error("User not created");

    return createdUser;
  },
};
