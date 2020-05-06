import firebase from "firebase/app";
import 'firebase/firebase-firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDpmz8fJuH6KsSXUz3P7kyplLoJ3nefXhY",
    authDomain: "bookstore-16aaf.firebaseapp.com",
    databaseURL: "https://bookstore-16aaf.firebaseio.com",
    projectId: "bookstore-16aaf",
    storageBucket: "bookstore-16aaf.appspot.com",
    messagingSenderId: "868626355609",
    appId: "1:868626355609:web:e5fc29ec2df263aaed2f08",
    measurementId: "G-XT5CH4D35J"
});

export const firestore = firebase.firestore();
