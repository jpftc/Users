import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";

export class GetUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(data: IGetUserRequestDTO) {
    const user = await this.userRepository.getUser(data.user);

    return user;
  }
}
