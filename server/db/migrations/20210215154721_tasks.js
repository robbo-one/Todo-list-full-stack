
exports.up = (knex, Promise) => {
    return knex.schema.createTable('tasks', (table) => {
      table.increments('id').primary()
      table.string('task')
      table.integer('priority')
      table.boolean('completed')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tasks')
  }
