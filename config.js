module.exports = {
  api: {
    port: process.env.PORT || 3000,
    host: process.env.HOSTAPI || 'http://localhost:',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
};
