import { libraryTypes } from "./library.types";

export const fetchProductsPending = () => ({
  type: libraryTypes.FETCH_BOOKS_PENDING,
});

export const fetchBooksSuccess = (books) => {
  return {
    type: libraryTypes.FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchProductsError = (error) => {
  return {
    type: libraryTypes.FETCH_BOOKS_ERROR,
    error: error,
  };
};
export const getBooks = () => {
  return {
    type: libraryTypes.GET_BOOKS,
    payload: [],
  };
};
