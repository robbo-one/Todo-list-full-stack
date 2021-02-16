
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('detail')
    table.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
