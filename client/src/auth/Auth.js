import { connect } from 'react-redux'
import auth0 from 'auth0-js'
import createHistory from 'history/createBrowserHistory'
import { routeActions } from 'react-router-redux'
import { AUTH_CONFIG } from './auth0-config'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  })

  constructor () {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // route to home
      } else if (err) {
        console.log(err)
        // route to home
      }
    })
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, { routeActions })(Auth)
