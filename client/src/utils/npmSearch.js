import axios from 'axios'

const version = 'v2'
const apiURL = `https://api.npms.io/${version}`

export const searchSuggestions = (input) => {
  const query = input.trim().toLowerCase().split(' ').join('+')
  const queryURL = `${apiURL}/search/suggestions?q=${query}&size=7`
  return new Promise((resolve, reject) => {
    axios.get(queryURL)
    .then(({ data }) => {
      const suggestions = data.map(suggestion => suggestion.package)
      resolve(suggestions)
    })
  })
  .catch(error => console.log(error))
}

export const getPackageInfo = (packageName) => {
  const query = packageName.trim().toLowerCase().split(' ').join('+')
  const queryURL = `${apiURL}/search?q=${query}&size=1`
  return new Promise((resolve, reject) => {
    axios.get(queryURL)
    .then(({ data }) => {
      const npmPackage = data.results[0].package
      resolve(npmPackage)
    })
  })
  .catch(error => console.log(error))
}

export const getPackagesByKeyword = (keyword) => {
  const query = keyword.trim().toLowerCase().split(' ').join('+')
  const queryURL = `${apiURL}/search?q=+keywords:${query}`
  return new Promise((resolve, reject) => {
    axios.get(queryURL)
    .then(({ data }) => {
      const suggestions = data.map(suggestion => suggestion.package)
      resolve(suggestions)
    })
  })
  .catch(error => console.log(error))
}
