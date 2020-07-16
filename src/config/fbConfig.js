import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDthczGy08IShskGPqevDmgsFAlZmixzrM",
    authDomain: "marioplan-4436f.firebaseapp.com",
    databaseURL: "https://marioplan-4436f.firebaseio.com",
    projectId: "marioplan-4436f",
    storageBucket: "marioplan-4436f.appspot.com",
    messagingSenderId: "1028470676436",
    appId: "1:1028470676436:web:4772cd8a7cda94f6789441",
    measurementId: "G-BDCDFR68E8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;