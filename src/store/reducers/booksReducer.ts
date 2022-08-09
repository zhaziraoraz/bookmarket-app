import { SET_BOOKS_REQUEST, SET_BOOKS_SUCCESS, SET_BOOKS_FAILED } from "../actionTypes";
import { BooksState, BooksActions } from "../types/booksType";

const initialState: BooksState = {
    pending: false,
    books: [],
    error: null
}

const booksReducer = (state = initialState, action: BooksActions) => {
    switch (action.type) {
        case SET_BOOKS_REQUEST:
            return {
                ...state,
                pending: true
            }
        case SET_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload.books,
                pending: false
            }
        case SET_BOOKS_FAILED:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            }
        default:
            return { ...state }
    }
}

export default booksReducer;