import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase'

console.log(firestore)

export const App = () => {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   firestore.collection("books")
  //     .get()
  //     .then(snapshot => {
  //       console.log(snapshot)
  //       const books = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       setBooks(books)
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // }, [])

  return (
    <div>
      {
        books.map(book => (
          <p key={book.id}>{book.name}</p>
        ))
      }
    </div>
  );
}