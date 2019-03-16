import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  projectId: 'test2-206614',
  databaseURL: 'https://test2-206614.firebaseio.com',
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;