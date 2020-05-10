import firebase from "firebase/app";
import "firebase/firebase-firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDpmz8fJuH6KsSXUz3P7kyplLoJ3nefXhY",
  authDomain: "bookstore-16aaf.firebaseapp.com",
  databaseURL: "https://bookstore-16aaf.firebaseio.com",
  projectId: "bookstore-16aaf",
  storageBucket: "bookstore-16aaf.appspot.com",
  messagingSenderId: "868626355609",
  appId: "1:868626355609:web:e5fc29ec2df263aaed2f08",
  measurementId: "G-XT5CH4D35J",
});

const firestore = firebase.firestore();

export const getBooksFromFirestore = () => {
  return firestore
    .collection("books")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .catch((err) => console.log(err));
};
