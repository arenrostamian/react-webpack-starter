/* * Types * */
export const AUTHENTICATE = 'AUTHENTICATE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

/* * Actions * */
export const authenticateUser = () => ({
  type: AUTHENTICATE
})

export const requestLogin = ({ creds }) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  payload: { creds }
})

export const receiveLogin = ({ user }) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: { id_token: user.id_token }
})

export const loginError = ({ message }) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  payload: { message }
})

/* * Reducer * */
export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHORIZE: {
      const newState = Object.assign({}, state)
      const { packageID } = action.payload
      newState.packageID = packageID
      return newState
    }
    default: return state
  }
}
