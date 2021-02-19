exports.up = function (knex) {
    return knex.schema.createTable('todos', table => {
      table.increments('id')
      table.string('text')
      table.integer('priority')
      table.boolean('completed')      
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('todos')
  }