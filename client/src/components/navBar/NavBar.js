import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Auth from '../../auth/Auth'

/* * Components * */
import { SearchBar } from '../'

/* * Styles * */
import { Menu } from 'semantic-ui-react'
import { navBarStyle } from '../../styles/semantic-style'
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

  handleAuthentication (e, { id }) {
    this.setState({ activeItem: 'authBtn' })
    id === 'authenticateBtn' && auth.authenticate()
    id === 'logoutBtn' && auth.logout()
  }

  render () {
    const { activeItem } = this.state
    const { button } = navBarStyle
    const { isAuthenticated } = this.props.auth
    return (
      <div className={style.container}>
        <div className={style.navigation}>
          <Menu pointing secondary>
            <Menu.Menu>
              <Menu.Item
                id='homeBtn'
                style={button}
                as={Link}
                to='/'
                name='home'
                active={activeItem === 'homeBtn'}
                onClick={this.handleClick}
              />
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item
                id='npmBtn'
                style={button}
                name='npm'
                active={activeItem === 'npmBtn'}
                onClick={this.handleClick}
              />
              {
                  isAuthenticated &&
                  <Menu.Item
                    id='profileBtn'
                    style={button}
                    as={Link}
                    to='/profile'
                    name='profile'
                    active={activeItem === 'profileBtn'}
                    onClick={this.handleClick}
                  />
              }
              <Menu.Item
                id={isAuthenticated ? 'logoutBtn' : 'authenticateBtn'}
                style={button}
                name={isAuthenticated ? 'log out' : 'nom'}
                active={activeItem === 'authBtn'}
                onClick={this.handleAuthentication}
              />
            </Menu.Menu>
          </Menu>
        </div>
        <SearchBar />
      </div>
    )
  }
}

const mapStateToProps = ({ auth, search }) => {
  return { auth, search }
}

export default withRouter(connect(mapStateToProps, null)(NavBar))
