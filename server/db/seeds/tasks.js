
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Go for walk', priority: 1, completed: true},
        {id: 2, task: 'I love my baby', priority: 2, completed: true},
        {id: 3, task: 'Go to supermarket', priority: 3, completed: true},
        {id: 4, task: 'Awesome weather', priority: 4, completed: false},
        {id: 5, task: 'Watching T.V', priority: 5, completed: true},
        {id: 6, task: 'Eat burger', priority: 6, completed: true},
        {id: 7, task: 'Go for dinner', priority: 7, completed: false},
        {id: 8, task: 'Happy!!!!!!', priority: 8, completed: false},
        {id: 9, task: 'Hungry!!!!!!!!', priority: 9, completed: true},
        {id: 10, task: 'Listening songs', priority: 10, completed: false}
      ]);
    });
};
