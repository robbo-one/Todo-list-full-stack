
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, detail: 'Complete this kick-ass To-Do list', completed: true},
        {id: 2, detail: '\"Complete\" the required \"assessment\" modules', completed: false},
        {id: 3, detail: 'Get some sleep', completed: false}
      ]);
    });
};
