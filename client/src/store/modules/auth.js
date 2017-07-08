/* * Types * */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

/* * Actions * */

/* * Login * * */
export const loginRequest = ({ creds }) => ({
  type: LOGIN_REQUEST,
  payload: { creds }
})

export const loginSuccess = ({ user }) => ({
  type: LOGIN_SUCCESS,
  payload: {authToken: user.id_token}
})

export const loginFailure = ({ message }) => ({
  type: LOGIN_FAILURE,
  payload: { message }
})

/* * Logout * */

export const logoutRequest = () => {
  return { type: LOGOUT_REQUEST }
}

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS }
}

/* * Reducer * */
const initialAuthState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('id_token')
}
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const { creds } = action.payload
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: creds
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true
      }
    }

    case LOGIN_FAILURE: {
      const { message } = action.payload
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: message
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      }
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
    }
    default: return initialAuthState
  }
}
