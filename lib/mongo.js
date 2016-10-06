'use strict';

var _skills = require('skills');

var _skills2 = _interopRequireDefault(_skills);

var _mongodb = require('mongodb');

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insertDocuments = function insertDocuments(collection, data, db) {
  var currentSkills = data.splice(0, 1000);

  if (currentSkills.length) {
    collection.insertMany(currentSkills, function (err, result) {
      console.log('Inserted ' + result.ops.length + ' documents into the document collection');
      insertDocuments(collection, data);
    });
  } else {
    db.close();
  }
};

_mongodb.MongoClient.connect(_env2.default.mongoUrl, function (err, db) {
  var collection = db.collection('tags');
  console.log('Connected correctly to server');
  insertDocuments(collection, _skills2.default, db);
});