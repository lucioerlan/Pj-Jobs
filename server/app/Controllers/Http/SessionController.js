"use strict";

const Database = use("Database");

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password);
    token.user = await Database.select("username", "email", "phone", "role")
      .from("users")
      .where("email", email);
    return token;
  }

  async show({ auth }) {
    let userauth = await auth.getUser();
    return [userauth];
  }
}

module.exports = SessionController;
