
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          task: "Sign up for trip to Mars",
          priority: 1,
          completed: false,
        },
        { id: 2, task: "Coffee", priority: 2, completed: false },
        { id: 3, task: "Read new book", priority: 3, completed: false },
        { id: 4, task: "Complete Dev Academy", priority: 1, completed: false },
      ]);
    });
};
