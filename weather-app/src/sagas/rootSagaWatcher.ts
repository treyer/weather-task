/* eslint-disable @typescript-eslint/no-use-before-define */
import { all, call, takeEvery, put, select } from "redux-saga/effects";

import {
  fetchGeo,
  fetchOpenweathermapForecast,
  fetchWeatherbitForecast,
} from "api/API";
import {
  FETCH_GEO,
  FETCH_OPENWEATHERMAP,
  FETCH_WEATHERBIT_DAILY,
  FETCH_WEATHERBIT_HOURLY,
  SET_GEO,
  SET_OPENWEATHERMAP_DAILY,
  SET_OPENWEATHERMAP_HOURLY,
  SET_WEATHERBIT_DAILY,
} from "store/constants";
import { GetGeoResponse, FetchForecastReturn } from "api/types";
import transformHoursToDaysWeather from "helpers/transformHoursToDays";

export default function* rootSagaWatcher() {
  yield all([
    takeEvery(FETCH_GEO, fetchGeoWorker),
    takeEvery(FETCH_OPENWEATHERMAP, fetchOpenweathermapWorker),
    takeEvery(FETCH_WEATHERBIT_DAILY, fetchWeatherbitWorker, "daily"),
    takeEvery(FETCH_WEATHERBIT_HOURLY, fetchWeatherbitWorker, "hourly"),
  ]);
}

function* fetchGeoWorker() {
  try {
    const payload: GetGeoResponse = yield call(fetchGeo);
    yield put({ type: SET_GEO, payload });
    yield put({ type: FETCH_OPENWEATHERMAP });
    // yield put({ type: FETCH_WEATHERBIT_DAILY });
    // yield put({ type: FETCH_WEATHERBIT_HOURLY });
  } catch (error: unknown) {
    // yield put(initializeAlert(e.message));
  }
}

function* fetchOpenweathermapWorker() {
  try {
    const { latitude, longitude } = yield select((state) => state.geo);
    if (latitude === null || longitude === null) {
      throw new Error("Incorrect latitude and (or) longitude input");
    }
    const payload: FetchForecastReturn = yield call(
      fetchOpenweathermapForecast,
      latitude,
      longitude,
    );
    const forecastInDays: FetchForecastReturn = yield call(
      transformHoursToDaysWeather,
      payload,
    );
    yield put({ type: SET_OPENWEATHERMAP_HOURLY, payload });
    yield put({ type: SET_OPENWEATHERMAP_DAILY, payload: forecastInDays });
  } catch (e) {
    // yield put(initializeAlert(e.message));
  }
}

function* fetchWeatherbitWorker(type: "daily" | "hourly") {
  try {
    const { latitude, longitude } = yield select((state) => state.geo);
    if (latitude === null || longitude === null) {
      throw new Error("Incorrect latitude and (or) longitude input");
    }
    const payload: FetchForecastReturn = yield call(
      fetchWeatherbitForecast,
      type,
      latitude,
      longitude,
    );
    if (type === "daily") yield put({ type: SET_WEATHERBIT_DAILY, payload });
    if (type === "hourly")
      yield put({ type: FETCH_WEATHERBIT_HOURLY, payload });
  } catch (error) {
    // yield put(initializeAlert(e.message));
  }
}
