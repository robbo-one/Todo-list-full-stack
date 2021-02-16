exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'mike', hash: null },
        { id: 2, username: 'logan', hash: null }
      ])
    })
}