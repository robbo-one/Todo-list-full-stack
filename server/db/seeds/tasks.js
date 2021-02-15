
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Wake up', priority: 1, completed: true},
        {id: 2, task: 'Eat Breakfast', priority: 2, completed: true},
        {id: 3, task: 'Watch Cartoons', priority: 3, completed: false},
        {id: 4, task: 'Buy Papaya', priority: 4, completed: true},
        {id: 5, task: 'Eat Papaya', priority: 5, completed: false}
      ]);
    });
};
