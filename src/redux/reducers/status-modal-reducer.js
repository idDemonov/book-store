import { OPEN_MODAL, CLOSE_MODAL } from "../actions/action-const";
const initialState = {
  status: false,
  book: null,
};

export const statusModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        status: true,
        book: action.book,
      };
    case CLOSE_MODAL:
      return {
        status: false,
        book: null,
      };
    default:
      return state;
  }
};
