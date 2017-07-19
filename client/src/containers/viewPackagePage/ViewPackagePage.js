import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { CommentsList } from '../../components'
import { updateCommentScore } from '../../utils/ddbUtils/npmPackages'

class ViewPackagePage extends Component {
  constructor (props) {
    super(props)
    this.handleCommentVote = this.handleCommentVote.bind(this)
  }

  handleCommentVote (voteParams) {
    updateCommentScore(voteParams)
  }

  render () {
    const { name, description, score, comments } = this.props.search.selectedPackage
    return (
      <div>
        <div>{name}</div>
        <div>{`description: ${description}`}</div>
        <div>{`score: ${score}`}</div>
        <CommentsList
          packageName={name}
          comments={comments}
          handleCommentVote={this.handleCommentVote}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => {
  return { search }
}

export default withRouter(connect(mapStateToProps, null)(ViewPackagePage))
