import { combineReducers } from "redux";
import { basketBooksReducer } from "./basket-books-reducer";
import { bootStatusReducer } from "./boot-status-reducer";
import { cardBooksReducer } from "./card-books-reducer";
import { statusModalReducer } from "./status-modal-reducer";

export const reducer = combineReducers({
  cardBooks: cardBooksReducer,
  basketBooks: basketBooksReducer,
  bootStatus: bootStatusReducer,
  modal: statusModalReducer,
});

/* initialState
{
  cardBooks: [],
  basketBooks: [],
  bootStatus: {
    loading: true,
    error: false
  },
  modal-card: false,
}
*/
