
exports.up = function(knex) {
    return knex.schema.createTable('tasks', (table) => {
      table.increments('id')
      table.string('task')
      table.string('priority')
      table.string('completed')
    })
  }
  

  exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
  }
