import React, { Component } from 'react'
import style from '../../styles/components.css'

/* * nombot testing * */
import NomBot from '../../nombot/NomBot'

class Home extends Component {
  render () {
    return (
      <div className={style.home}>
        <NomBot />
        <h1>nomz</h1>
      </div>
    )
  }
}

export default Home
