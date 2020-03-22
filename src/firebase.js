import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA8KuYYBa3UHf8GRwQz1TN5yxrovfcxbMI",
    authDomain: "bt3103project-d9bee.firebaseapp.com",
    databaseURL: "https://bt3103project-d9bee.firebaseio.com",
    projectId: "bt3103project-d9bee",
    storageBucket: "bt3103project-d9bee.appspot.com",
    messagingSenderId: "255899271581",
    appId: "1:255899271581:web:edfc53bab0911ca7cfef74",
    measurementId: "G-SDGL31XYE3"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });
export default database;