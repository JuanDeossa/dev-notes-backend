require("dotenv").config();

import express, { Request, Response } from "express";
import { tasks } from "./utils/notes";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/notes", (_req: Request, res: Response) => {
  res.send([...tasks]);
});

app.listen(PORT, () => {
  console.log(`Node server running on port: ${PORT}`);
});
