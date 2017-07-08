import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Auth from '../../auth/Auth'

    /* * Components * */
import { SearchBar } from '../'

    /* * Styles * */
import { Menu } from 'semantic-ui-react'
import semanticStyle from './semantic-style'
import style from '../../styles/nav-bar.css'

const auth = new Auth()

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'home',
      searchInput: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  handleClick (e, { id }) {
    this.setState({ activeItem: id })
    id === 'npmBtn' && (window.location.href = 'https://www.npmjs.com/')
  }

  handleAuthentication () {
    this.setState({ activeItem: 'authBtn' })
    auth.authenticate()
  }

  render () {
    const { activeItem } = this.state
    const { button } = semanticStyle
    return (
      <div className={style.container}>
        <div className={style.navigation}>
          <Menu pointing secondary>
            <Menu.Menu position='right'>
              <Menu.Item
                id='homeBtn'
                style={button}
                as={Link}
                to='/om-nom-nom'
                name='home'
                active={activeItem === 'homeBtn'}
                onClick={this.handleClick}
                />
              <Menu.Item
                id='npmBtn'
                style={button}
                name='npm'
                active={activeItem === 'npmBtn'}
                onClick={this.handleClick}
                />
              <Menu.Item
                id='profileBtn'
                style={button}
                as={Link}
                to='/you'
                name='profile'
                active={activeItem === 'profileBtn'}
                onClick={this.handleClick}
                />
              <Menu.Item
                id='authBtn'
                style={button}
                name='get nomming'
                active={activeItem === 'authBtn'}
                onClick={this.handleAuthentication}
                />
            </Menu.Menu>
          </Menu>
        </div>
        <div className={style.search}>
          <SearchBar />
        </div>
      </div>
    )
  }
    }

const mapStateToProps = ({ auth, search }) => {
  return { auth, search }
}

export default connect(mapStateToProps, null)(NavBar)
