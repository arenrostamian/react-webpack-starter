import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* * Components * */
import { SearchBar } from '../'

/* * Styles * */
import { Menu } from 'semantic-ui-react'
import semanticStyle from './semantic-style'
import style from '../../styles/nav-bar.css'

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'home',
      searchInput: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  handleItemClick (event, { name }) {
    this.setState({ activeItem: name })
    name === 'home' && this.props.history.push('/')
    name === 'npm' && (window.location.href = 'https://www.npmjs.com/')
  }

  handleAuthentication (e, { name }) {
    this.setState({ activeItem: name })
    this.props.history.push('/profile')
  }

  render () {
    const { activeItem } = this.state
    const { button } = semanticStyle
    return (
      <div className={style.container}>
        <div className={style.navigation}>
          <Menu pointing secondary>
            <Menu.Menu position='right'>
              <Menu.Item style={button}
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                />
              <Menu.Item style={button}
                name='npm'
                active={activeItem === 'npm'}
                onClick={this.handleItemClick}
                />
              <Menu.Item style={button}
                name='get nomming'
                active={activeItem === 'get nomming'}
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

const mapStateToProps = ({ search }) => {
  return { search }
}

export default connect(mapStateToProps, null)(NavBar)
