import { PUT_BOOK_IN_BASKET } from "../actions/action-const";

export const basketBooksReducer = (state = [], action) => {
  switch (action.type) {
    case PUT_BOOK_IN_BASKET:
      return state.includes(action.book)
        ? state.filter(({ id }) => id !== action.book.id)
        : [...state, action.book];
    default:
      return state;
  }
};
