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
      }

      // parentComment: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Comment,
      //   join: {
      //     from: 'Comment.id',
      //     through: {
      //       from: 'Comment_Reply.replyId',
      //       to: 'Comment_Reply.parentId'
      //     },
      //     to: 'Comment.id'
      //   }
      // },

      // replies: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Comment,
      //   join: {
      //     from: 'Comment.id',
      //     through: {
      //       from: 'Comment_Reply.parentId',
      //       to: 'Comment_Reply.replyId'
      //     },
      //     to: 'Comment.id'
      //   }
      // }
    }
  }
}

module.exports = Comment
