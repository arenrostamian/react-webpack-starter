const Model = require('objection').Model

class Comment extends Model {
  static get tableName () {
    return 'comments'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['id', 'type', 'packageId', 'creatorId', 'timestamp', 'text'],
      properties: {
        id: { type: 'integer' },
        parentId: { type: 'integer' },
        packageId: { type: 'integer' },
        creatorId: { type: 'integer' },
        timestamp: { type: 'integer' },
        text: { type: 'string' },
        score: { type: ['integer', 'null'] }
      }
    }
  }

  static get relationMappings () {
    const { User, Package } = require('./')
    return {
      package: {
        relation: Model.BelongsToOneRelation,
        modelClass: Package,
        join: {
          from: 'Comment.packageId',
          to: 'Package.id'
        }
      },

      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'Comment.creatorId',
          to: 'User.id'
        }
      },

      parentComment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Comment,
        join: {
          from: 'Comment.parentId',
          to: 'Comment.id'
        }
      },

      replies: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'Comment.id',
          to: 'Comment.parentId'
        }
      }
    }
  }
}

module.exports = Comment
