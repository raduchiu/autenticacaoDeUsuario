"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT || 4000;

_app2.default.get('/', (req, res) => {
  res.json({
    ok: 'api-authenticate',
  });
})

_app2.default.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
