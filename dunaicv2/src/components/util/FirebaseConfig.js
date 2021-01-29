import firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyASQz1aTZwUCCdbny2hrBIA6RYhnE9Nyps",
  authDomain: "dunaic.firebaseapp.com",
  databaseURL: "https://dunaic.firebaseio.com",
  projectId: "dunaic",
  storageBucket: "dunaic.appspot.com",
  messagingSenderId: "690004682454",
  appId: "1:690004682454:web:093e35d851dcde40324b77",
  measurementId: "G-EPHDXQNQ8D"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
