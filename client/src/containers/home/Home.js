import React, { Component } from 'react'
import { withRouter } from 'react-router'
import style from '../../styles/components.css'

class Home extends Component {
  render () {
    return (
      <div className={style.home}>
        <h1>nomz</h1>
      </div>
    )
  }
}

export default withRouter(Home)
