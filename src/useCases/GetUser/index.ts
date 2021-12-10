import { MySqlUsersRepository } from "../../repositories/implementations/MySqlUsersRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const mySqlUserRepository = new MySqlUsersRepository();

const getUserUseCase = new GetUserUseCase(mySqlUserRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserUseCase, getUserController };
