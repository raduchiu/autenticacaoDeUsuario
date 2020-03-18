"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
// uma função que transforma uma função de callBack em um async awair
// a boblioteca util ja vem com o node
var _util = require('util');

var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

exports. default = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // se não existir o header, já não deixa passar
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provida' });
  }
  // usando split pra dividir a bearer a partir do espaço
  // pra ficarmos apenas com o token, isso é feito através da desestruturação
  // a vírgula ignora p bearer e utiliza apenas o token
  const [, token] = authHeader.split(' ');

  try {
    // tranformando as funções através do promissify
    const decoded = await _util.promisify.call(void 0, _jsonwebtoken2.default.verify)(token, _auth2.default.secret);
    // pegando o id do usuário logado na sessão
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'toke invalid' });
  }
};
