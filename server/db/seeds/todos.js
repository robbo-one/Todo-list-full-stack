
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, todo: "grow potatoes", completed:'false'},
        {id: 2, todo: "boil Potatoes", completed:'false'},
        {id: 3, todo: "mash Potatoes", completed:'false'}
      ]);
    });
};
