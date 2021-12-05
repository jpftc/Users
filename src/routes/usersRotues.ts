import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const usersRoutes = Router();

usersRoutes.post("/user", (req: Request, res: Response) => {
  return createUserController.handle(req, res);
});

export { usersRoutes };
