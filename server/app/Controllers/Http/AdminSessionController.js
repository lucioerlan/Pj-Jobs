"use strict";

const Database = use("Database");

class AdminSessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password);
    token.user = await Database.select("username", "email", "phone", "role")
      .from("users")
      .where("email", email)
      .andWhere("role", '<>', "User")

    return token;
  }
}

module.exports = AdminSessionController;
