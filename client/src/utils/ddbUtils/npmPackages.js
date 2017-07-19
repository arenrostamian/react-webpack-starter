import axios from 'axios'

export const addPackage = (packageDetails) => {
  axios.post('/add-package', packageDetails)
  .then(res => console.log(res.data.message))
  .catch(error => console.log(error))
}

export const getPackage = (packageName) => {
  return axios.get('/get-package', { params: { packageName } })
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const updatePackage = (updateDetails) => {
  axios.post('/update-package', updateDetails)
  .then(res => console.log(res.data.message))
  .catch(error => console.log(error))
}

export const updateCommentScore = (voteParams) => {
  axios.post('/update-comment-score', voteParams)
  .then(res => console.log(res.data.message))
  .catch(error => console.log(error))
}
