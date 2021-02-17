
exports.up = function(knex) {
  return knex.schema.table('todos', table => {
    table.integer('added_by_user')
  })
};

exports.down = function(knex) {
  return knex.schema.table('todos', table => {
    table.dropColumn('added_by_user')
  })
};
