import * as types from "./action-const";

export const addBookInBasketAC = (id) => ({
  type: types.PUT_BOOK_IN_BASKET,
  id,
});

export const getBooksLocalstorageAC = () => ({
  type: types.GET_BOOKS_LOCALSTORAGE,
});

export const getBooksFirestoreAC = () => ({ type: types.GET_BOOKS_FIRESTORE });

export const addBookBasketAC = (id) => ({ type: types.ADD_BOOK_BASKET, id });

export const removeBookBasket = (id) => ({
  type: types.REMOVE_BOOK_BASKET,
  id,
});

export const deleteBookBasket = (id) => ({
  type: types.DELETE_BOOK_BASKET,
  id,
});

export const cleanBasket = () => ({ type: types.CLEAN_BASKET });
