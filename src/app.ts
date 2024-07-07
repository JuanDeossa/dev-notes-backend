import { server } from "./server";
import { envs } from "./config/envs";
const { PORT } = envs;

(async () => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
