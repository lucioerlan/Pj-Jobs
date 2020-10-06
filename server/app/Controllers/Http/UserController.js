"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class UserController {
  async index() {
    const user = User.all();
    return user;
  }

  async show({ params, request }) {
    const work = await Database.table("users")
      .where("id", params.id)
      .orderBy("created_at", "desc")
      .limit(1);
    return work;
  }

  async store({ request }) {
    const data = request.only([
      "username",
      "email",
      "password",
      "phone",
      "role",
    ]);
    const user = await User.create(data);
    return user;
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const data = request.only([
      "username",
      "email",
      "password",
      "phone",
      "role",
      "id",
    ]);
    user.merge(data);
    await user.save();
    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }
}

module.exports = UserController;
