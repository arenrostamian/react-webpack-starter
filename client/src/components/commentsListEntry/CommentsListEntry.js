import React from 'react'
import {
  getTimeElapsed,
  getDateFromTimestamp,
  getTimeFromTimestamp
} from '../../utils/utilFunctions/timeUtils'

const VoteButtons = (props) => {
  const { score, packageName, commentTimestamp, handleCommentVote } = props
  const voteParams = { packageName, commentTimestamp }
  return (
    <div>
      <div onClick={() => handleCommentVote({ type: 1, ...voteParams })}>
        <i class='fa fa-caret-up' aria-hidden='true' />
      </div>
      <div>{score}</div>
      <div onClick={() => handleCommentVote({ type: -1, ...voteParams })}>
        <i class='fa fa-caret-down' aria-hidden='true' />
      </div>
    </div>
  )
}

const CommentsListEntry = (props) => {
  const { packageName, comment, handleCommentVote } = props
  const { score, text, timestamp, username } = comment
  const date = getDateFromTimestamp(timestamp)
  const time = getTimeFromTimestamp(timestamp)
  const timeElapsed = getTimeElapsed(timestamp)
  return (
    <div>
      <VoteButtons
        score={score}
        packageName={packageName}
        commentTimestamp={timestamp}
        handleCommentVote={handleCommentVote}
      />
      <div>{text}</div>
      <div>{`score: ${score}`}</div>
      <div>comment left {` ${timeElapsed} by ${username}`}</div>
      <div>{`${date} at ${time}`}</div>
    </div>
  )
}

export default CommentsListEntry
