import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import counterSaga from "../features/todos/redux/counterSaga";
import counterSlice from "../features/todos/redux/counterSlice";

// Fonction génératrice qui capte toutes les sagas.
const rootSaga = function* rootSaga() {
  yield all([counterSaga()]);
};

// Creation du middleware Saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
