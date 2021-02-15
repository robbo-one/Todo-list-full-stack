//task - string
//priority - int 1, 2, 3
//completed - boolean

exports.up = (knex, Promise) => {
    return knex.schema.createTable("todos", (table) => {
      table.increments("id");
      table.string("task");
      table.integer("priority");
      table.boolean("completed");
    })
  }


  exports.down = (knex, Promise) => {
    return knex.schema.dropTable("todos");
  }


