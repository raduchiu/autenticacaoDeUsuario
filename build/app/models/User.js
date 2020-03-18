"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// yarn add bcryptjs
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
// criando a classe user, que irá cadastrar nossos usuários
class User extends _sequelize.Model {
  static init(sequelize) {
    // chamando o método init da classe pai, ou seja chamando o init da model
    super.init(
      {
        // importando apenas os campos que serão inseridos pelos usuários
        name: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        // campo que existe somente no código
        password: _sequelize2.default.VIRTUAL,
        password_hash: _sequelize2.default.STRING,
        provider: _sequelize2.default.BOOLEAN,
      },
      {
        // passando o segundo parametro (um obj), que servirá para a conexão com o index
        // (pode haver mais de um obj)
        sequelize,
      }
    );
    // trechos de códigos automáticos baseados em ações que ocorrem no model
    // diversos tipos de hooks, beforeSave serve para qualquer alteração ou criação de usuários
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // criando a criptografia da senha do user
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    // retorna o model que acabou de ser incializado
    return this;
  }

  checkPassword(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
}
exports. default = User;
