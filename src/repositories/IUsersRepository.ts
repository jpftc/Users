import { User } from "../entities/User";

export interface IUsersRepository {
  createUser(user: User): Promise<void>;
  getUser(user: string): Promise<User>;
}
