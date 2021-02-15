
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {id: 1, task: 'Eat the cheese', completed: false},
        {id: 2, task: 'Pet the dog', completed: false},
        {id: 3, task: 'Put Jeff outside', completed: false}
      ]);
    });
};
