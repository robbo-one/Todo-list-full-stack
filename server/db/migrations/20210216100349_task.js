//@ts-check

exports.up = function(knex) {
  return knex.schema.createTable("task", table => {
    table.increments("id")
    table.string("todoTask")
    table.string("completed")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("task");
};
