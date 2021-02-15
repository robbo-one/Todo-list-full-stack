
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Wake up', priority: 1, completed: 'yes'},
        {id: 2, task: 'Eat Breakfast', priority: 2, completed: 'yes'},
        {id: 3, task: 'Watch Cartoons', priority: 3, completed: 'No'},
        {id: 4, task: 'Buy Papaya', priority: 4, completed: 'Yes'},
        {id: 5, task: 'Eat Papaya', priority: 5, completed: 'No'}
      ]);
    });
};
