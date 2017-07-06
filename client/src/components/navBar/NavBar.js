import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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
    this.setState({ activeItem: name })
  }

  handleLogout (e, { name }) {
    // const { ownProps } = this.props
    console.log('navbar', this)
    const location = './profile'

    // this.props.pushRoute({ location })
    // two.dispatch(push('/profile'))
    // console.log('log ', this.props)
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
                name='NPM'
                active={activeItem === 'NPM'}
                onClick={this.handleItemClick}
                />
              <Menu.Item style={button}
                name=' LOG IN'
                active={activeItem === ' LOG IN'}
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

const mapStateToProps = (store, props) => {
  return { store, props }
}

export default connect(mapStateToProps, null)(NavBar)
