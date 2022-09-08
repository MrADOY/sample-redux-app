import { all, put, takeEvery } from "redux-saga/effects";
import counterSlice from "./counterSlice";

const { increment, incrementAsync } = counterSlice.actions;

function* incrementAsyncSaga(action) {
  const step = action?.payload || 1;
  yield put(increment(step));
}

export default function* counterSaga() {
  yield all([takeEvery(incrementAsync, incrementAsyncSaga)]);
}
