import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVgJFkONKpIcoL7GBFEbRNNiiw35JhIf4",
  authDomain: "tutorial-marioplan-d9f20.firebaseapp.com",
  projectId: "tutorial-marioplan-d9f20",
  storageBucket: "tutorial-marioplan-d9f20.appspot.com",
  messagingSenderId: "652897030134",
  appId: "1:652897030134:web:50d847fc852ebe73bc81d7",
  measurementId: "G-8DF4YXKF5K"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;