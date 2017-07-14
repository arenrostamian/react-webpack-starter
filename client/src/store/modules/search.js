/* * Types * */
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

/* * Actions * */
export const setSearchResults = ({ selectedPackage }) => ({
  type: SET_SEARCH_RESULTS,
  payload: { selectedPackage }
})

/* * Reducer * */
export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      const { selectedPackage } = action.payload
      return {
        ...state,
        selectedPackage
      }
    }

    default: return state
  }
}
