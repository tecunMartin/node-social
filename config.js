module.exports = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:',
    },
    jwt: {
        secret : process.env.JWT_SECRET || 'notaSecret!'
    }
}