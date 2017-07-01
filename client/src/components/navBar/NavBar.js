import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Actions * */
import { logout } from '../../store/modules/firebase'

/* * Components * */
import { SearchBar } from '../'

/* * Styles * */
import { Menu } from 'semantic-ui-react'
import style from '../../styles/nav-bar.css'

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'home',
      searchInput: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleItemClick (event, { name }) {
    event.preventDefault()
    this.setState({ activeItem: name })
  }

  handleInputChange ({ target }) {
    const input = target.value
    this.setState({ input })
  }

  handleSubmit () {
    const { input } = this.state
  }

  handleLogout (e, { name }) {
    const { logout } = this.props
    e.preventDefault()
    this.setState({ activeItem: name })
    logout()
    .then(() => this.context.router.history.push('/'))
  }

  render () {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary className={style.navigation}>
          <Menu.Menu position='right'>
            <Menu.Item
              name='HOME'
              active={activeItem === 'HOME'}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              name='NPM'
              active={activeItem === 'NPM'}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              name='LOG OUT'
              active={activeItem === 'LOG OUT'}
              onClick={this.handleLogout}
              />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

NavBar.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = null

export default connect(mapStateToProps, { logout })(NavBar)
