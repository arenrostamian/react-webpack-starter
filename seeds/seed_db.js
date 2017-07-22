exports.seed = function (knex) {
  return Promise.all([
    knex('comments').del()
    .then(knex('packages').del())
    .then(knex('users').del()),
    knex('users').insert([
      {
        id: 1,
        authId: 1,
        username: 'rmnr'
      },
      {
        id: 2,
        authId: 2,
        username: 'sparklez'
      }
    ]),
    knex('packages').insert([
      {
        id: 1,
        name: 'axios',
        score: 1
      },
      {
        id: 2,
        name: 'objection',
        score: 7
      }
    ]),
    knex('comments').insert([
      {
        id: 1,
        packageId: 1,
        creatorId: 1,
        timestamp: Date.now(),
        text: 'yass queen',
        score: 1
      },
      {
        id: 2,
        packageId: 2,
        creatorId: 2,
        timestamp: Date.now(),
        text: 'comment',
        score: 6
      }
    ])
  ])
}
