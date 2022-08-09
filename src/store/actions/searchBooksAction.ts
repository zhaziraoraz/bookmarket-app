import { SET_SEARCH_BOOK_REQUEST, SET_SEARCH_BOOK_SUCCESS, SET_SEARCH_BOOK_FAILED } from "../actionTypes";
import { SearchBookRequest, SearchBookSuccessRequest, SearchBookFailedRequest, SearchBookSuccessPayload, SearchBookFailedPayload } from "../types/searchBookType";

export const searchBookAction = (search: string, terms: string): SearchBookRequest => ({
    type: SET_SEARCH_BOOK_REQUEST
})

export const searchBookSuccessAction = (payload: SearchBookSuccessPayload): SearchBookSuccessRequest => ({
    type: SET_SEARCH_BOOK_SUCCESS,
    payload
})

export const searchBookFailedAction = (payload: SearchBookFailedPayload): SearchBookFailedRequest => ({
    type: SET_SEARCH_BOOK_FAILED,
    payload
})