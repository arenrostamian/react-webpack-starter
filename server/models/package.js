const Model = require('objection').Model

class Package extends Model {
  static get tableName () {
    return 'packages'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        score: { type: ['integer', 'null'] }
      }
    }
  }

  static get relationMappings () {
    const { Comment } = require('./')
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'Package.id',
          to: 'Comment.packageId'
        }
      }
    }
  }
}

module.exports = Package
