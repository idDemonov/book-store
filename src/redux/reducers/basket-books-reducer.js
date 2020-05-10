import {
  PUT_BOOK_IN_BASKET,
  INCREMENT_BOOK_BASKET,
  DECREMENT_BOOK_BASKET,
  DELETE_BOOK_BASKET,
} from "../actions/constants";

export const basketBooksReducer = (state = [], action) => {
  switch (action.type) {
    case PUT_BOOK_IN_BASKET:
      return toggleBookInBasket(state, action.book);
    case DELETE_BOOK_BASKET:
      return toggleBookInBasket(state, action.book);
    case INCREMENT_BOOK_BASKET:
      return addCountBook(state, action.id);
    case DECREMENT_BOOK_BASKET:
      return removeCountBook(state, action.id);
    default:
      return state;
  }
};

const addCountBook = (basket, id) => {
  return basket.map((book) => {
    if (book.id === id) {
      return { ...book, count: book.count + 1 };
    }
    return book;
  });
};

const removeCountBook = (basket, id) => {
  return basket.map((book) => {
    if (book.id === id && book.count > 1) {
      return { ...book, count: book.count - 1 };
    }
    return book;
  });
};

const toggleBookInBasket = (basket, book) => {
  return basket.includes(book)
    ? basket.filter(({ id }) => id !== book.id)
    : [...basket, book];
};
