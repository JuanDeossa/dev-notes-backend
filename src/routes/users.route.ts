import { Router } from "express";
import { usersController } from "../controllers/users.controller";
import { usersValidator } from "../middlewares/usersValidator.middleware";

export const usersRouter = Router();

usersRouter.post(
  "",
  (req, res, next) => usersValidator(req, res, next),
  usersController.createUser
);
// .get("", usersController.)
// .get("/:id", usersController.getNote)
