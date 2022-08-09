import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ISearch } from "../types/searchBookType";
import { searchBookSuccessAction, searchBookFailedAction } from "../actions/searchBooksAction";
import { SET_SEARCH_BOOK_REQUEST } from "../actionTypes";

const getSearchBook = (search: string, terms: string) =>
    axios.get<ISearch[]>(`https://www.googleapis.com/books/v1/volumes?q=${search}+${terms}:keyes&key=AIzaSyBPTSwHCReK-bxzQbldhzEGl0FrJQp0ihk`);

function* getSearchBookSaga(action: any): any {
    const { search, terms } = action
    try {
        const response = yield call(getSearchBook, action.search, action.terms);
        yield put(
            searchBookSuccessAction({
                books: response.data.items
            })
        );
    } catch (e: any) {
        yield put(
            searchBookFailedAction({
                error: e.message
            })
        );
    }
}

function* SearchBookSaga() {
    yield all([takeLatest(SET_SEARCH_BOOK_REQUEST, getSearchBookSaga)]);
}

export default SearchBookSaga;
