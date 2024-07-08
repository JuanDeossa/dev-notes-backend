import { Router } from "express";
import { usersController } from "../controllers/users.controller";
import { usersValidator } from "../middlewares/usersValidator.middleware";

export const usersRouter = Router();

usersRouter.post(
  "/users",
  (req, res, next) => usersValidator(req, res, next),
  usersController.createUser
);
usersRouter.post(
  "/login",
  (req, res, next) => usersValidator(req, res, next),
  usersController.login
);
// .get("", usersController.)
// .get("/:id", usersController.getNote)
