//@ts-check

exports.seed = function (knex) {
  return knex("task").del()
    .then(function() {
      return knex("task").insert ([
        {id: 1, todoTask: "Clean the house", completed: "N"},
        {id: 2, todoTask: "Create project", completed: "Y"},
        {id: 3, todoTask: "Buy wine", completed: "N"}
      ]);
    });
};