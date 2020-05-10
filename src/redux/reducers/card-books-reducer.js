import { PUT_BOOKS_IN_STATE } from "../actions/action-const";
const initialState = [];

export const cardBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_BOOKS_IN_STATE:
      const books = action.books.map((book) => ({ ...book, count: 1 }));
      return [...state, ...books];
    default:
      return state;
  }
};
