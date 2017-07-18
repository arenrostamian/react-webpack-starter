import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Auth from '../../auth/Auth'

/* * Utils * */
import { searchSuggestions, getPackageInfo, getPackagesByKeyword } from '../../utils/npmUtils/packageQueries'
import { addPackage, getPackage, updatePackage } from '../../utils/ddbUtils/npmPackages'

/* * Actions * */
import { setSearchResults } from '../../store/actions'

/* * Components * */
import { SearchBar } from '../../components'

/* * Styles * */
import { Menu } from 'semantic-ui-react'
import { navBarStyle } from '../../styles/semantic-style'
import style from '../../styles/nav-bar.css'

const auth = new Auth()

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.handlePackageSearch = this.handlePackageSearch.bind(this)
    this.handleSuggestionSelected = this.handleSuggestionSelected.bind(this)
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

  handlePackageSearch () {
    const { setSearchResults, history } = this.props
    const { searchType, searchTerm } = this.state
    if (searchType === 'name') {
      getPackageInfo(searchTerm)
      .then(selectedPackage => setSearchResults({ selectedPackage }))
      .then(history.push('/package-details'))
      .catch(error => console.log(error))
    }
    if (searchType === 'type') {
      getPackagesByKeyword(searchTerm)
      .then(suggestedPackages => setSearchResults({ suggestedPackages }))
      .then(history.push('/explore-packages'))
      .catch(error => console.log(error))
    }
  }

  handleSuggestionSelected (e, { suggestion }) {
    const { setSearchResults, history } = this.props
    getPackage(suggestion.name)
    .then(ddbResult => setSearchResults({ selectedPackage: { ...suggestion, ...ddbResult } }))
    .then(history.push(`/package-details/${suggestion.name}`))
    .catch(error => console.log(error))
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
                name='nom'
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
        <SearchBar
          handleSuggestionSelected={this.handleSuggestionSelected}
          handlePackageSearch={this.handlePackageSearch}
          searchSuggestions={searchSuggestions}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ auth, search }) => {
  return { auth, search }
}

export default withRouter(connect(mapStateToProps, { setSearchResults })(NavBar))
