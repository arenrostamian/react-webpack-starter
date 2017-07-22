const Model = require('objection').Model

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['id', 'authId', 'username'],
      properties: {
        id: { type: 'integer' },
        authId: { type: 'integer' },
        username: { type: 'string' }
      }
    }
  }

  static get relationMappings () {
    const { Comment } = require('./')
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'User.id',
          to: 'Comment.creatorId'
        }
      }
    }
  }
}

module.exports = User
