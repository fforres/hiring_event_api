import { MongoClient } from 'mongodb';

import env from './env';

const reconnect = (mainFunction) => {
  MongoClient.connect(env.mongoUrl, (err, db) => {
    mainFunction(db);
  });
};

export const getTagsByName = searchText => new Promise((resolve, reject) => {
  reconnect((db) => {
    const collection = db.collection('tags');
    collection.find({
      tagName: new RegExp(searchText, 'i'),
    }).toArray((err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
});


export const saveNewUser = ({ linkedinId, linkedinData, tags }) => new Promise((resolve, reject) => {
  reconnect((db) => {
    const collection = db.collection('users');
    console.log('Saving NewUser');
    collection.updateOne({
      linkedinId,
    }, {
      $set: {
        linkedinId,
        tags: JSON.parse(tags),
        linkedinData: JSON.parse(linkedinData),
      },
    }, {
      upsert: true,
    }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('User Saved');
      }
    });
  });
});


export default {
  getTagsByName,
  saveNewUser,
};
