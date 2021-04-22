import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCZ29Gg4qfuWCZ74eyx5yR3JXCSc-TwNjo",
    authDomain: "heroes-app-91da8.firebaseapp.com",
    projectId: "heroes-app-91da8",
    storageBucket: "heroes-app-91da8.appspot.com",
    messagingSenderId: "854285506539",
    appId: "1:854285506539:web:105dcea4ff762b4ad0ebae",
    measurementId: "G-SE4ECW8RP9"
};
firebase.initializeApp(firebaseConfig)
export default firebase;