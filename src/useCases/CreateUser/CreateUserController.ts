import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      lastName,
      user,
      email,
      password,
      phoneNumber,
      area,
      teamLead,
    } = req.body;

    try {
      await this.createUserUseCase.execute({
        name,
        last_name: lastName,
        user,
        email,
        password,
        phone_number: phoneNumber,
        area,
        team_lead: teamLead,
      });

      return res.status(201).json({
        Message: "Created.",
      });
    } catch (error: any) {
      return res.status(400).json({
        Error: error.message,
      });
    }
  }
}
