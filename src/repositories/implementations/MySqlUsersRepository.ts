import knex from "../../database";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MySqlUsersRepository implements IUsersRepository {
  async createUser(user: User): Promise<void> {
    const email = await knex("users").where({ email: user.email });
    const usr = await knex("users").where({ user: user.user });

    if (email.length || usr.length) {
      throw new Error("User already exist.");
    }

    await knex("users").insert({
      name: user.name,
      last_name: user.lastName,
      user: user.user,
      email: user.email,
      password: user.password,
      phone_number: user.phoneNumber,
      area: user.area,
      team_lead: user.teamLead,
    });
  }
}
