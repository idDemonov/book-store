import * as types from "./constants";
import { getBooksFromFirestore } from "../../services/firebase";

// Basket Book

export const putBookInBasket = (book) => ({
  type: types.PUT_BOOK_IN_BASKET,
  book,
});

export const deleteBookBasket = (book) => ({
  type: types.DELETE_BOOK_BASKET,
  book,
});

export const addBookBasket = (id) => ({
  type: types.INCREMENT_BOOK_BASKET,
  id,
});

export const removeBookBasket = (id) => ({
  type: types.DECREMENT_BOOK_BASKET,
  id,
});

// Status Modal

export const openModal = (book) => ({ type: types.OPEN_MODAL, book });

export const closeModal = () => ({ type: types.CLOSE_MODAL });

// Boot Status
export const error = (error) => ({ type: types.ERROR, error });

export const toggleIsFetching = (status) => ({
  type: types.TOGGLE_IS_FETCHING,
  status,
});

// Cards Book

export const putBooksInState = (books) => ({
  type: types.PUT_BOOKS_IN_STATE,
  books,
});

// Thunks

export const getBook = (dispatch) => {
  dispatch(toggleIsFetching(true));

  const books = localStorage.getItem("books");
  if (books != null) {
    dispatch(toggleIsFetching(false));
    dispatch(putBooksInState(JSON.parse(books)));
  } else {
    getBooksFromFirestore()
      .then((books) => {
        localStorage.setItem("books", JSON.stringify(books));
        dispatch(toggleIsFetching(false));
        dispatch(putBooksInState(books));
      })
      .catch((err) => dispatch(error(err)));
  }
};
