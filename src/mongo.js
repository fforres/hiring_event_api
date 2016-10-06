import skills from 'skills';
import { MongoClient } from 'mongodb';
import env from './env';

const insertDocuments = (collection, data, db) => {
  const currentSkills = data.splice(0, 1000);

  if (currentSkills.length) {
    collection.insertMany(currentSkills, (err, result) => {
      console.log(`Inserted ${result.ops.length} documents into the document collection`);
      insertDocuments(collection, data);
    });
  } else {
    db.close();
  }
};


MongoClient.connect(env.mongoUrl, (err, db) => {
  const collection = db.collection('tags');
  console.log('Connected correctly to server');
  insertDocuments(collection, skills, db);
});
