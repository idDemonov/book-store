import { ERROR, TOGGLE_IS_FETCHING } from "../actions/action-const";

const initialState = {
  error: false,
  loading: false,
};

export const bootStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return { ...state, loading: action.status };
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
