import { SET_BOOKS_REQUEST, SET_BOOKS_SUCCESS, SET_BOOKS_FAILED } from "../actionTypes";

export interface IBooks {
    title: string,
    subtitle: string,
    isbn13: number,
    price: string,
    image: string,
    url: string
}

export interface BooksState {
    pending: boolean;
    books: [];
    error: string | null;
}

export interface BooksSuccessPayload {
    books: [];
}

export interface BooksFailedPayload {
    error: string;
}

export interface BooksRequest {
    type: typeof SET_BOOKS_REQUEST;
}

export type BooksSuccess = {
    type: typeof SET_BOOKS_SUCCESS;
    payload: BooksSuccessPayload;
};

export type BooksFailed = {
    type: typeof SET_BOOKS_FAILED;
    payload: BooksFailedPayload;
};

export type BooksActions =
    BooksRequest
    | BooksSuccess
    | BooksFailed;