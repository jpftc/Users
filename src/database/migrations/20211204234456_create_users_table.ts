import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 100).notNullable();
    table.string("last_name", 100).notNullable();
    table.string("user", 100).unique().notNullable();
    table.string("email", 100).unique().notNullable();
    table.string("password", 100).notNullable();
    table.string("phone_number", 100).notNullable();
    table.string("area", 100).notNullable();
    table.string("team_lead", 100).notNullable();
    table.string("token", 999);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
