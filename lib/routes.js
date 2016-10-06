'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _skills = require('skills');

var _skills2 = _interopRequireDefault(_skills);

var _model = require('./model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)(); /* eslint require-yield: 1 */


router.get('/', _regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.body = 'Hello World!';

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

router.get('/tags', _regenerator2.default.mark(function _callee2() {
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          this.body = _skills2.default;

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

router.post('/tags', _regenerator2.default.mark(function _callee3() {
  return _regenerator2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _model.getTagsByName)(this.request.body.searchString || '');

        case 2:
          this.body = _context3.sent;

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));

router.post('/linkedin', _regenerator2.default.mark(function _callee4() {
  return _regenerator2.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _model.saveNewUser)(this.request.body);

        case 2:
          this.body = _context4.sent;

        case 3:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this);
}));

exports.default = router;