
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Homework', priority: 1, completed: 'no'},
        {id: 2, task: 'Laundry', priority: 2, completed: 'no'},
        {id: 3, task: 'Cry', priority: 3, completed: 'no'}
      ]);
    });
};
