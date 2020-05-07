import { UPDATE_SUM } from "../actions/action-const";
const initialState = 0;

export const totalSumReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUM:
      const sum =
        action.basket.length > 0
          ? action.basket.reduce(
              (acc, book) => acc + book.price * book.count,
              0
            )
          : 0;
      return sum;
    default:
      return state;
  }
};
