exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task_details: 'mow the lawns', priority: 1, completed: false},
        {id: 2, task_details: 'vacuum the house', priority: 1, completed: false},
        {id: 3, task_details: 'clean the toilet', priority: 1, completed: false},
        {id: 4, task_details: 'put the washing on', priority: 1, completed: false},
        {id: 5, task_details: 'empty the litter box', priority: 1, completed: true},
        {id: 6, task_details: 'water the plants', priority: 1, completed: false}
      ]);
    });
};