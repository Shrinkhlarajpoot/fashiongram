import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBc2DGxjRd13J5U7ltDuwMTZr7ziJHGSXA",
    authDomain: "fashiongram-41725.firebaseapp.com",
    projectId: "fashiongram-41725",
    storageBucket: "fashiongram-41725.appspot.com",
    messagingSenderId: "836519187532",
    appId: "1:836519187532:web:0e61bfbf97f9421a0650e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };