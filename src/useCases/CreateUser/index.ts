import { MySqlUsersRepository } from "../../repositories/implementations/MySqlUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mySqlUserRepository = new MySqlUsersRepository();

const createUserUseCase = new CreateUserUseCase(mySqlUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
