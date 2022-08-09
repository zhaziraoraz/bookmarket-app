import { SET_SEARCH_BOOK_FAILED, SET_SEARCH_BOOK_SUCCESS, SET_SEARCH_BOOK_REQUEST } from "../actionTypes";
import { SearchBookState, SearchBookAction } from "../types/searchBookType";
const initialState: SearchBookState = {
    pending: false,
    books: [],
    error: null
}

const searchBookReducer = (state = initialState, action: SearchBookAction) => {
    switch (action.type) {
        case SET_SEARCH_BOOK_REQUEST:
            return {
                ...state,
                pending: true
            }
        case SET_SEARCH_BOOK_SUCCESS:
            return {
                ...state,
                books: action.payload.books,
                pending: false
            }
        case SET_SEARCH_BOOK_FAILED:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            }
        default:
            return {
                ...state
            }
    }
}

export default searchBookReducer;
