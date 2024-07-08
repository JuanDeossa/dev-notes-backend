import { server } from "./server";
import { envs } from "./config/envs";
import { notesRouter, usersRouter } from "./routes";
import { authenticateToken } from "./middlewares/auth.middleware";
const { PORT } = envs;

(async () => {
  server.use("/notes", authenticateToken, notesRouter);
  server.use("/", usersRouter);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
