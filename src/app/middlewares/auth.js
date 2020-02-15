import jwt from 'jsonwebtoken';
// uma função que transforma uma função de callBack em um async awair
// a boblioteca util ja vem com o node
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
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
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // pegando o id do usuário logado na sessão
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'toke invalid' });
  }
};
