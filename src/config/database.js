
process.env.NODE_ENV === 'development' ?
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
  } :
  module.exports = {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    define: {
      timerstamps: true,
      underscored: true,
      underscoredAll: true,
    }
  };
