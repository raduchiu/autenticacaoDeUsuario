"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
// chama o database
require('./database');

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(_express2.default.json());
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
