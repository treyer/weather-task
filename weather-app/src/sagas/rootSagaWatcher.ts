import { all, call, takeEvery, put } from "redux-saga/effects";

import { fetchGeo } from "api/API";
import { FETCH_GEO, SET_GEO } from "store/reducers/constants";
import GetGeoResponse from "api/types";

export default function* rootSagaWatcher() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  yield all([takeEvery(FETCH_GEO, fetchGeoWorker)]);
}

function* fetchGeoWorker() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const payload: GetGeoResponse = yield call(fetchGeolocation);
    yield put({ type: SET_GEO, payload });
  } catch (e) {
    // yield put(initializeAlert(e.message));
  }
}

async function fetchGeolocation() {
  const res = await fetchGeo();
  return res;
}
