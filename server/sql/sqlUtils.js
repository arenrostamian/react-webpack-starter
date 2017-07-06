const api = require('api-npm')

const getPackage = (packageName) => {
  return new Promise((resolve, reject) => {
    api.getdetails(packageName, ({ _id, name, description, homepage, keywords, repository, license }) => {
      const packageDetails = {
        _id,
        name,
        description,
        homepage,
        keywords,
        repository,
        license
      }
      resolve(packageDetails)
    })
  })
  .catch(error => console.log(error))
}

const updateFirebase = (packageDetails) => {
  const {
    _id,
    name,
    description,
    homepage,
    keywords,
    repository,
    license
  } = packageDetails

  return new Promise((resolve, reject) => {
    baseDB.ref(`packages/${_id}`)
    .set({
      name,
      description,
      homepage,
      keywords,
      repository,
      license
    })
    resolve(`Firebase updated with ${name}, yo!`)
  })
  .catch(error => console.log(error))
}

exports.writeFirebase = (packageName) => {
  getPackage(packageName)
  .then(res => updateFirebase(res))
  .then(res => console.log(res))
  .catch(error => console.log(error))
}
