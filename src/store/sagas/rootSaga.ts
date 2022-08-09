import { all, fork } from "redux-saga/effects";
import BooksSaga from "./booksSaga";
import SearchBookSaga from "./searchBookSaga";

export function* rootSaga() {
    yield all([fork(SearchBookSaga), fork(BooksSaga)])
}