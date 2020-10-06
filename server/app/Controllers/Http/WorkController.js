"use strict";

const Database = use("Database");

const Work = use("App/Models/Work");

class WorkController {
  async index() {
    const work = Work.all();
    return work;
  }

  async show({ params }) {
    const work = [await Work.findOrFail(params.id)];
    return work;
  }

  async store({ request }) {
    const data = request.only([
      "company_name",
      "company_phone",
      "company_email",
      "company_avatar",
      "job_description",
      "job_image",
    ]);
    const work = await Work.create(data);
    return work;
  }

  async update({ params, request }) {
    const work = await Work.findOrFail(params.id);
    const data = request.only([
      "id",
      "company_name",
      "company_phone",
      "company_email",
      "company_avatar",
      "job_description",
      "job_image",
    ]);

    work.merge(data);
    await work.save();

    return work;
  }

  async destroy({ params }) {
    const work = await Work.findOrFail(params.id);
    await work.delete();
  }
}

module.exports = WorkController;
