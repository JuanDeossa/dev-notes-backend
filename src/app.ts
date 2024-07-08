import { server } from "./server";
import { envs } from "./config/envs";
import { notesRouter, usersRouter } from "./routes";
const { PORT } = envs;

(async () => {
  server.use("/notes", notesRouter);
  server.use("/", usersRouter);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
