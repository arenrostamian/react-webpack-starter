import auth0 from 'auth0-js'
import { Redirect } from 'react-router'
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
    this.authenticate = this.authenticate.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }
  authenticate () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        return <Redirect to='/om-nom-nom' />
      }
      if (error) {
        console.log(error)
        return <Redirect to='/om-nom-nom' />
      }
    })
  }

  /* * Sets the time at which the access token will expire * */
  setSession (authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    return <Redirect to='/om-nom-nom' />
  }

  /* * Clears access token and ID from local storage * */
  logout () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    return <Redirect to='/' />
  }

  /* * Checks whether accss token has expired * */
  isAuthenticated () {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default Auth
