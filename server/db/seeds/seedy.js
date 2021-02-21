
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, detail: 'Complete this kick-ass ToDo list', completed: false},
        {id: 2, detail: 'Sleep', completed: false},
        {id: 3, detail: 'Watch React vids on YouTube', completed: true}
      ]);
    });
};
