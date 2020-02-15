module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'goBarber',
  define: {
    timerstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
