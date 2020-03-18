import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
// criando o vetor de models
const models = [User];
// classe que vai controlar o BD
class Database {
  constructor() {
    this.init();
  }

  init() {
    // criando conexão com o banco de dado
    this.connection = process.env.NODE_ENV === 'development' ? new Sequelize(databaseConfig) :
      new Sequelize(process.env.DATABASE_URL, databaseConfig);
    // percorrer (utilizando a função map) os models e os conecta um a um
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
