exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, name: 'mike', hash: null },
        { id: 2, name: 'logan', hash: null }
      ])
    })
}