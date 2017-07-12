const Registry = require('npm-registry')

const npm = new Registry()

exports.getPackagesByName = (npmPackageName) => {
  return new Promise((resolve, reject) => {
    npm.packages.get(npmPackageName, (error, npmPackages) => {
      console.log('packages', npmPackages)
      console.log('error', error)
      resolve(error || npmPackages)
    })
  })
}

exports.getPackagesByKeyword = (keyword) => {
  npm.packages.get(keyword, (error, npmPackages) => {
    return error || npmPackages
  })
}
