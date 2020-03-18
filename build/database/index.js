"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);
// criando o vetor de models
const models = [_User2.default];
// classe que vai controlar o BD
class Database {
  constructor() {
    this.init();
  }

  init() {
    // criando conexão com o banco de dado
    this.connection = new (0, _sequelize2.default)(_database2.default);
    // percorrer (utilizando a função map) os models e os conecta um a um
    models.map(model => model.init(this.connection));
  }
}
exports. default = new Database();
