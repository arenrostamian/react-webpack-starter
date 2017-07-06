import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

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
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleItemClick (event, { name }) {
    event.preventDefault()
    console.log('props are ', this.props)
    console.log('name is ', name)
    this.setState({ activeItem: name })
  }

  handleLogout (e, { name }) {
    console.log('log in')
  }

  render () {
    const { activeItem } = this.state
    const { bar, button } = semanticStyle
    return (
      <div className={style.container}>
        <div className={style.navigation}>
          <Menu pointing secondary>
            <Menu.Menu position='right'>
              <Menu.Item style={button}
                name='HOME'
                active={activeItem === 'HOME'}
                onClick={this.handleItemClick}
                />
              <Menu.Item style={button}
                name='NPM'
                active={activeItem === 'NPM'}
                onClick={this.handleItemClick}
                />
              <Menu.Item style={button}
                name='LOG IN'
                active={activeItem === 'LOG IN'}
                onClick={this.handleLogout}
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

const mapStateToProps = null

export default connect(mapStateToProps)(NavBar)
