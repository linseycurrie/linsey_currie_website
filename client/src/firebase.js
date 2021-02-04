import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-EmBuyWJAfQzWSr1p-h1ty_bjMOYF0mM",
    authDomain: "linsey-currie-f80e6.firebaseapp.com",
    databaseURL: "https://linsey-currie-f80e6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "linsey-currie-f80e6",
    storageBucket: "linsey-currie-f80e6.appspot.com",
    messagingSenderId: "336939952065",
    appId: "1:336939952065:web:d6d5d55949d32a1c74f140"
  };

firebase.initializeApp(config);

export default firebase;

