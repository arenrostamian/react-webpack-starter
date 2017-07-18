import axios from 'axios'

export const ddbAddUser = (userID) => {
  return new Promise((resolve, reject) => {
    axios.post('/add-user', { userID })
    .then(response => resolve(response))
    .catch(error => resolve(error))
  })
}
