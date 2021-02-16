
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: "grow potatoes", completed:false},
        {id: 2, task: "boil Potatoes", completed:true},
        {id: 3, task: "mash Potatoes", completed:false}
      ]);
    });
};
