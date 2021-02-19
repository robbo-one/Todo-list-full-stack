
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, text: 'clean room', priority: 4, completed: false },
        {id: 2, text: 'take out trash', priority: 2,completed: false },
        {id: 3, text: 'do the dishes', priority: 1,completed: false }
      ]);
    });
};
