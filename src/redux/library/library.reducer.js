import { libraryTypes } from "./library.types";

const INITIAL_STATE = {
  pending: false,
  books: [],
  error: null,
};

const libraryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case libraryTypes.FETCH_BOOKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case libraryTypes.FETCH_BOOKS_SUCCESS:
      console.log(action)
      return {
        ...state,
        pending: false,
        books: action.payload,
      };
    case libraryTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default libraryReducer;
