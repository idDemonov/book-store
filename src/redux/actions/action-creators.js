import * as types from "./action-const";

export const putBookInBasket = (book) => ({
  type: types.PUT_BOOK_IN_BASKET,
  book,
});

export const getBooksLocalstorage = () => ({
  type: types.GET_BOOKS_LOCALSTORAGE,
});

export const removeBookBasket = (id) => ({
  type: types.REMOVE_BOOK_BASKET,
  id,
});

export const deleteBookBasket = (id) => ({
  type: types.DELETE_BOOK_BASKET,
  id,
});

export const addBookBasket = (id) => ({ type: types.ADD_BOOK_BASKET, id });

export const openModal = (book) => ({ type: types.OPEN_MODAL, book });

export const getBooksFirestore = () => ({ type: types.GET_BOOKS_FIRESTORE });

export const cleanBasket = () => ({ type: types.CLEAN_BASKET });

export const closeModal = () => ({ type: types.CLOSE_MODAL });
