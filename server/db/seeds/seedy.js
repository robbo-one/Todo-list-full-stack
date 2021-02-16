
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, detail: 'Buy cupcakes', completed: false},
        {id: 2, detail: 'Post Mila\'s birthday present', completed: true},
        {id: 3, detail: 'Grocery shopping', completed: false}
      ]);
    });
};
