
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, task: 'eat the cat', priority:  'EXTREME', completed: 'Yes'},
        {id: 2, task: 'buy a new cat', priority: 'Low', completed: 'No'},
        {id: 3, task: 'feed the cat', priority: 'medium', completed: 'No'}
      ]);
    });
};
