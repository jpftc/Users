import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const user = new User(
      data.name,
      data.last_name,
      data.user,
      data.email,
      data.password,
      data.phone_number,
      data.area,
      data.team_lead
    );

    await this.usersRepository.createUser(user);
  }
}
