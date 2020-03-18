"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();
// criando a rota para criação de um novo usuário
routes.post('/users', _UserController2.default.store);
routes.post('/sessions', _SessionController2.default.store);
// deixando a usabilidade apenas pra sessões já iniciadas
routes.use(_auth2.default);

routes.put('/users', _UserController2.default.update);

exports. default = routes;
