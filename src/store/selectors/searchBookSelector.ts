import { createSelector } from "reselect";

import { RootState } from "../reducers/rootReducer";

const getPending = (state: RootState) => state.search.pending;

const getSearchBook = (state: RootState) => state.search.books;

const getError = (state: RootState) => state.search.error;

export const getSearchBookSelector = createSelector(getSearchBook, (books) => books);

export const getPendingSearchBookSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSearchBookSelector = createSelector(getError, (error) => error);