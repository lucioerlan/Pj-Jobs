"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Work extends Model {
  static get table() {
    return "works";
  }
}

module.exports = Work;
