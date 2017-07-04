import React from 'react'
import axios from 'axios'

const getPackageDetails = () => {
  axios.post('/writeFirebase', {
    name: 'axios'
  })
  .then(res => console.log('response is ', res))
  .catch(error => console.log(error))
}

const NomBot = () => (
  <div>
    <button onClick={getPackageDetails}>NPM QUERYSS</button>
  </div>
)

export default NomBot
