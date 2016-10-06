'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveNewUser = exports.getTagsByName = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _mongodb = require('mongodb');

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reconnect = function reconnect(mainFunction) {
  _mongodb.MongoClient.connect(_env2.default.mongoUrl, function (err, db) {
    mainFunction(db);
  });
};

var getTagsByName = exports.getTagsByName = function getTagsByName(searchText) {
  return new _promise2.default(function (resolve, reject) {
    reconnect(function (db) {
      var collection = db.collection('tags');
      collection.find({
        tagName: new RegExp(searchText, 'i')
      }).toArray(function (err, docs) {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  });
};

var saveNewUser = exports.saveNewUser = function saveNewUser(_ref) {
  var linkedinId = _ref.linkedinId;
  var linkedinData = _ref.linkedinData;
  var tags = _ref.tags;
  return new _promise2.default(function (resolve, reject) {
    reconnect(function (db) {
      var collection = db.collection('users');
      console.log('Saving NewUser');
      collection.updateOne({
        linkedinId: linkedinId
      }, {
        $set: {
          linkedinId: linkedinId,
          tags: JSON.parse(tags),
          linkedinData: JSON.parse(linkedinData)
        }
      }, {
        upsert: true
      }, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve('User Saved');
        }
      });
    });
  });
};

exports.default = {
  getTagsByName: getTagsByName,
  saveNewUser: saveNewUser
};