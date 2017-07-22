const dotenv = require('dotenv')
dotenv.load()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOST,
      port: '3306',
      database: process.env.RDS_DB,
      user: process.env.RDS_USER,
      password: process.env.RDS_PW
    },
    pool: { min: 2, max: 10 }
  }
}
