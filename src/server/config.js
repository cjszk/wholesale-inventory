module.exports = {
  PORT: process.env.PORT || 25343,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:25342',
  DATABASE_URL:
        process.env.DATABASE_URL
};