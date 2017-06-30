import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Actions * */
import { logout } from '../../store/modules/firebase'

/* * Actions * */

/* * Styles * */
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  constructor () {
    super()
    this.state = { activeItem: 'home' }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleItemClick (e, { name }) {
    e.preventDefault()
    this.setState({ activeItem: name })
  }

  handleLogout () {
    const { logout } = this.props
    logout()
    .then(() => this.context.router.history.push('/'))
  }

  render () {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary>
        <Menu.Menu position='right'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
              />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
              />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
              />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
              />
        </Menu.Menu>
      </Menu>
    )
  }
}

NavBar.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = null

export default connect(mapStateToProps, { logout })(NavBar)
