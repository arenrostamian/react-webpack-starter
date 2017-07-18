import React from 'react'
import { Redirect } from 'react-router'
import Auth0Lock from 'auth0-lock'
import { ddbAddUser } from '../utils/ddbUtils/users'

import { AUTH_CONFIG, configOptions } from './auth0-config'
import store from '../store/store'
import {
  requestLogin,
  loginSuccess,
  loginFailure,
  requestLogout,
  logoutSuccess
} from '../store/actions'

const AuthLock = new Auth0Lock(
  AUTH_CONFIG.clientId,
  AUTH_CONFIG.domain,
  configOptions
)

const removeItem = item => localStorage.removeItem(item)
const setItem = item => localStorage.setItem(item[0], item[1])

export const handleSession = (type, items) => {
  const action = type === 'remove' ? removeItem : setItem
  return new Promise((resolve, reject) => {
    items.forEach(item => action(item))
    resolve()
  })
}

class Auth {
  constructor () {
    this.authenticate = this.authenticate.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)

    AuthLock.on('authenticated', (authResult) => {
      AuthLock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          store.dispatch(loginFailure({ error }))
        } else { this.handleAuthentication(authResult, profile) }
      })
    })
  }

  authenticate () {
    store.dispatch(requestLogin())
    AuthLock.show()
  }

  /* * Sets the time at which the access token will expire * */
  handleAuthentication (authResult, profile) {
    const { accessToken, idToken, idTokenPayload } = authResult
    const expiresAt = JSON.stringify((idTokenPayload.exp * 1000) + new Date().getTime())
    const items = [ ['accessToken', accessToken], ['idToken', idToken], ['expiresAt', expiresAt] ]
    const userID = profile.identities[0].user_id

    ddbAddUser(userID)
    .then(handleSession('set', items))
    .then(store.dispatch(loginSuccess({ profile })))
    .catch(error => console.log(error))
  }

  logout () {
    const items = ['accessToken', 'idToken', 'expiresAt']
    store.dispatch(requestLogout())
    handleSession('remove', items)
    .then(store.dispatch(logoutSuccess()))
    return <Redirect to='/' />
  }

  isAuthenticated () {
    const expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    const currentTime = new Date().getTime()
    return expiresAt ? currentTime < expiresAt : false
  }
}

export default Auth
