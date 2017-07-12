const Registry = require('npm-registry')
const npmApi = require('api-npm')

const npm = new Registry()

exports.getPackagesByNameRegistry = (npmPackageName) => {
  return new Promise((resolve, reject) => {
    npm.packages.get(npmPackageName, (error, npmPackages) => {
      console.log('packages', npmPackages)
      console.log('error', error)
      resolve(error || npmPackages)
    })
  })
}

exports.getPackagesByKeywordRegistry = (keyword) => {
  npm.packages.get(keyword, (error, npmPackages) => {
    return error || npmPackages
  })
}

exports.getPackageByName = (npmPackageName) => {
  console.log('get package by name')
  return new Promise((resolve, reject) => {
    npm.get(npmPackageName, (npmPackage) => {
      console.log('package is ', npmPackage)
      resolve(npmPackage)
    })
  })
}

exports.getPackagesByKeyword = (keyword) => {
  npm.packages.get(keyword, (error, npmPackages) => {
    return error || npmPackages
  })
}

// [
// 'react-transform', {
//   'transforms': [{
//     'transform': 'react-transform-catch-errors',
//       'imports': [ 'react', 'redbox-react' ]
//   }]
// }],
