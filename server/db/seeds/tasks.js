
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'dont eat the cat', priority:  'EXTREME', completed: 'Yes'},
        {id: 2, task: 'buy a new cat', priority: 'Low', completed: 'No'},
        {id: 3, task: 'feed the cat', priority: 'medium', completed: 'No'}
      ])
    })
}
