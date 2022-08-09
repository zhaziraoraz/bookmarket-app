import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

// Mount it on the Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;