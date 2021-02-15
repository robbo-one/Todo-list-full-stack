exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, task: 'Feed the cat', priority: 1, completed: 'yes'},
        {id: 2, task: 'Mow the lawn', priority: 2, completed: 'no'},
        {id: 3, task: 'Clean my dentures', priority: 3, completed: 'no'}
      ])
    })
}
