import { PrismaClient } from "@prisma/client";
import { CreateUser, LoginUser } from "../models/user.interface";
import { compare, hash } from "bcrypt";

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
    const { email, password } = note;

    const newPassword = await hash(password, 10);

    const createdUser = await Prisma.user.create({
      data: {
        email,
        password: newPassword,
      },
    });

    if (!createdUser) throw new Error("User not created");

    return {
      id: createdUser.id,
      email: createdUser.email,
    };
  },
  login: async (note: LoginUser) => {
    const { email, password } = note;

    const userFound = await Prisma.user.findUnique({ where: { email } });
    if (!userFound) throw new Error("Error with credentials");

    const verifyPassword = await compare(password, userFound.password);

    if (!verifyPassword) throw new Error("Error with credentials");

    console.log(userFound);
    console.log(verifyPassword);
  },
  createSession: async (note: CreateUser) => {
    const { email, password } = note;

    const newPassword = await hash(password, 10);

    const createdUser = await Prisma.user.create({
      data: {
        email,
        password: newPassword,
      },
    });

    if (!createdUser) throw new Error("User not created");

    return {
      id: createdUser.id,
      email: createdUser.email,
    };
  },
};
