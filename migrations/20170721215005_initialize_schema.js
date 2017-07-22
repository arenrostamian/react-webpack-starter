
exports.up = function (knex) {
  console.log('initializing schema')
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.integer('authId')
    table.string('username')
  })
  .createTableIfNotExists('packages', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('score')
  })
  .createTableIfNotExists('comments', (table) => {
    table.increments('id').primary()
    table.integer('packageId').unsigned().references('id').inTable('packages')
    table.integer('creatorId').unsigned().references('id').inTable('users')
    table.integer('timestamp')
    table.string('text')
    table.integer('score')
  })
  .createTableIfNotExists('Comment_Reply', (table) => {
    table.increments('id')
    table.integer('parentId').unsigned().references('id').inTable('comments')
    table.integer('replyId').unsigned().references('id').inTable('comments')
  })
  .then(console.log('* * * schema migrated * * *'))
  .catch(error => console.log('error migrating schema', error))
}

exports.down = function (knex) {
  console.log('droping tables')
  return Promise.all([
    knex.schema.dropTableIfExists('Comment_Reply'),
    knex.schema.dropTableIfExists('comments'),
    knex.schema.dropTableIfExists('packages'),
    knex.schema.dropTableIfExists('users')
  ])
  .then(console.log('* * * tables dropped * * *'))
  .catch(error => console.log('error dropping tables ', error))
}
