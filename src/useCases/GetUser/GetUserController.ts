import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req.params;

    try {
      const usr = await this.getUserUseCase.execute({ user });

      return res.status(200).json({
        User: usr,
      });
    } catch (error: any) {
      return res.status(400).json({
        Error: error.message,
      });
    }
  }
}
