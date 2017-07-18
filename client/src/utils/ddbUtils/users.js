import axios from 'axios'

export const ddbAddUser = (userID) => {
  return new Promise((resolve, reject) => {
    axios.post('/add-user', { userID })
    .then(resolve())
    .catch(error => resolve(error))
  })
}

export const ddbAddUserComment = (userID, comment) => {
  return new Promise((resolve, reject) => {
    axios.post('/add-user-comment', { userID, comment })
    .then(resolve())
    .catch(error => resolve(error))
  })
}
