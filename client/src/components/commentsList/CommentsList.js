import React, { Component } from 'react'
import { CommentsListEntry } from '../'

class CommentsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeComment: 0
    }
  }

  render () {
    const { packageName, comments, handleCommentVote } = this.props
    return (
      <div>
        {
          comments.map(comment => (
            <div>
              <CommentsListEntry
                packageName={packageName}
                comment={comment}
                handleCommentVote={handleCommentVote}
              />
              <br />
              <br />
            </div>
          ))
        }
      </div>
    )
  }
}

export default CommentsList
