import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "sagas/rootSagaWatcher";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
