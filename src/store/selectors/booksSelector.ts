import { createSelector } from "reselect";

import { RootState } from "../reducers/rootReducer";

const getPending = (state: RootState) => state.books.pending;

const getBooks = (state: RootState) => state.books.books;

const getError = (state: RootState) => state.books.error;

export const getBooksSelector = createSelector(getBooks, (books) => books);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);