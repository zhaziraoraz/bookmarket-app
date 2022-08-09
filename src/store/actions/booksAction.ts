import { SET_BOOKS_REQUEST, SET_BOOKS_SUCCESS, SET_BOOKS_FAILED } from "../actionTypes";
import { BooksRequest, BooksSuccess, BooksFailed, BooksSuccessPayload, BooksFailedPayload } from "../types/booksType";

export const booksAction = (): BooksRequest => ({
    type: SET_BOOKS_REQUEST
})

export const booksSuccessAction = (payload: BooksSuccessPayload): BooksSuccess => ({
    type: SET_BOOKS_SUCCESS,
    payload
})

export const booksFailedAction = (payload: BooksFailedPayload): BooksFailed => ({
    type: SET_BOOKS_FAILED,
    payload
})