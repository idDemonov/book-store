const initialState = {
  error: false,
  loading: true,
};

export const bootStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};
