'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3015;
var app = (0, _koa2.default)();

// BODY PARSER
app.use((0, _koaBodyparser2.default)());

// RUTAS
app.use(_routes2.default.routes()).use(_routes2.default.allowedMethods());

app.listen(PORT);
console.log('Open localhost:' + PORT);