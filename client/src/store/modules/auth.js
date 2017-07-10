/* * Types * */
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

/* * Actions * */

export const requestLogin = () => ({
  type: REQUEST_LOGIN
})

export const loginSuccess = ({ profile }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user: {
      name: profile.name,
      nickname: profile.nickname,
      picture: profile.picture,
      email: profile.email,
      user_id: profile.user_id
    }
  }
})

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  payload: { error }
})

export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

/* * Reducer * */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN: {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    }

    case LOGIN_SUCCESS: {
      const { user } = action.payload
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user
      }
    }

    case LOGIN_FAILURE: {
      const { error } = action.payload
      console.log(`:( :( Login Failed: ${error}`)
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      }
    }

    case REQUEST_LOGOUT: {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      }
    }

    case LOGOUT_SUCCESS: {
      return {
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
    }
    default: return state
  }
}
