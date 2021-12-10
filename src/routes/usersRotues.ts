import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { getUserController } from "../useCases/GetUser";

const usersRoutes = Router();

usersRoutes.post("/user", (req, res) => {
  return createUserController.handle(req, res);
});

usersRoutes.get("/user/:user", (req, res) => {
  return getUserController.handle(req, res);
});

export { usersRoutes };
