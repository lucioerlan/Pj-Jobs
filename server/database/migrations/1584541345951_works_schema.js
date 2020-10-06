'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MotoristaSchema extends Schema {
  up () {
    this.create('works', (table) => {
      table.increments()
        table.string('company_name').notNullable()
        table.string('company_phone', 30).notNullable()
        table.string('company_email').notNullable()
        table.string('company_avatar').notNullable()
        table.string('job_description').notNullable()
        table.string('job_image').notNullable()
        table.timestamps()
    })
}

  down () {
    this.drop('works')
  }
}

module.exports = MotoristaSchema
