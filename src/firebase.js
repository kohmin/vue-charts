import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCQH24CqWz0_5DuieM4Nbk8yPBeqlbNELw",
  authDomain: "fir-tutorial-e4242.firebaseapp.com",
  databaseURL: "https://fir-tutorial-e4242.firebaseio.com",
  projectId: "fir-tutorial-e4242",
  storageBucket: "fir-tutorial-e4242.appspot.com",
  messagingSenderId: "794243145358",
  appId: "1:794243145358:web:5c52364fa0e1b55646b3df",
  measurementId: "G-RC7R98T96M"
};
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;