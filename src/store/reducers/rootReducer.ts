import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import searchBookReducer from "./searchBookReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    search: searchBookReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;