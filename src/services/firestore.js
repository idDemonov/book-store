import { firestore } from "./firebase";

// export const getBooks = () => {
//   return firestore
//     .collection("books")
//     .get()
//     .then((snapshot) => {
//       const books = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       return books;
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
// };
