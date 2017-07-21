module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOST,
      user: process.env.RDS_USER,
      password: process.env.RDS_PW,
      database: process.env.RDS_DB
    }
  }
}
