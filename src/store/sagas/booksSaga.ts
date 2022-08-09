import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IBooks } from "../types/booksType";
import { booksFailedAction, booksSuccessAction } from "../actions/booksAction";

import { SET_BOOKS_REQUEST } from "../actionTypes";

const getBooks = () =>
    axios.get<IBooks[]>("https://api.itbook.store/1.0/new");

function* fetchBooksSaga(): any {
    try {
        const response = yield call(getBooks);
        yield put(
            booksSuccessAction({
                books: response.data.books
            })
        );
    } catch (e: any) {
        yield put(
            booksFailedAction({
                error: e.message
            })
        );
    }
}

function* BooksSaga() {
    yield all([takeLatest(SET_BOOKS_REQUEST, fetchBooksSaga)]);
}

export default BooksSaga;
