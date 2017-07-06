/* * Types * */
export const PUSH_ROUTE = 'PUSH_ROUTE'

export const pushRoute = (props) => {
  console.log(props)
  return ({
  type: PUSH_ROUTE,
  payload: { props.location }
})
}
