exports.seed = function (knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        { id: 1, task: 'make coffee', priority: 'low', completed: true },
        { id: 2, task: 'make breakfast', priority: 'low', completed: false },
        { id: 3, task: 'go to dev academy', priority: 'high', completed: false }
      ])
    })
}