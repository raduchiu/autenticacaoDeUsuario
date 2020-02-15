import Sequelize, { Model } from 'sequelize';
// yarn add bcryptjs
import bcrypt from 'bcryptjs';
// criando a classe user, que irá cadastrar nossos usuários
class User extends Model {
  static init(sequelize) {
    // chamando o método init da classe pai, ou seja chamando o init da model
    super.init(
      {
        // importando apenas os campos que serão inseridos pelos usuários
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        // campo que existe somente no código
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
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
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    // retorna o model que acabou de ser incializado
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
