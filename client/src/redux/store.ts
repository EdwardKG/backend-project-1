import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import {sagaWatcher} from "./saga/sagas";

const saga = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(saga));
saga.run(sagaWatcher);

export default store;
