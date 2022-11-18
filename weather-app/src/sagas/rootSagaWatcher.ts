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
} from "store/actions/constants";
import { GetGeoResponse, FetchForecastReturn } from "api/types";
import transformHoursToDaysWeather from "helpers/transformHoursToDays";
import {
  fetchOpenweathermap,
  // fetchWeatherbitDaily,
  // fetchWeatherbitHourly,
  setGeo,
  setOpenweathermapDaily,
  setOpenweathermapHourly,
  setWeatherbitDaily,
  setWeatherbitHourly,
} from "store/actions";

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
    yield put(setGeo(payload));
    yield put(fetchOpenweathermap());
    // yield put(fetchWeatherbitDaily());
    // yield put(fetchWeatherbitHourly());
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
    yield put(setOpenweathermapHourly(payload));
    yield put(setOpenweathermapDaily(forecastInDays));
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
    if (type === "daily") yield put(setWeatherbitDaily(payload));
    if (type === "hourly") yield put(setWeatherbitHourly(payload));
  } catch (error) {
    // yield put(initializeAlert(e.message));
  }
}
