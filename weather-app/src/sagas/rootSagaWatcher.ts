/* eslint-disable @typescript-eslint/no-use-before-define */
import { all, call, takeEvery, put, select } from "redux-saga/effects";
import uuid from "react-uuid";
// @ts-ignore
import { toaster } from "react-toaster-lib";

import {
  fetchGeo,
  fetchOpenweathermapForecast,
  fetchTimezoneByCoordinates,
  fetchWeatherbitForecast,
} from "api/API";
import {
  FETCH_CALENDAR_EVENTS,
  FETCH_GEO,
  FETCH_OPENWEATHERMAP,
  FETCH_WEATHERBIT_DAILY,
  FETCH_WEATHERBIT_HOURLY,
  HANDLE_DATA_FROM_AUTOCOMPLETE,
} from "store/actions/constants";
import { GetGeoResponse, FetchForecastReturn } from "api/types";
import transformHoursToDaysWeather from "helpers/transformHoursToDays";
import {
  fetchOpenweathermap,
  fetchWeatherbitDaily,
  fetchWeatherbitHourly,
  setBgSearchPhrase,
  setCalendarEvents,
  setGeo,
  setOpenweathermapDaily,
  setOpenweathermapHourly,
  setWeatherbitDaily,
  setWeatherbitHourly,
} from "store/actions";
import apiCalendar from "api/ApiCalendar/ApiCalendar";
import { CalendarEvent } from "store/types";
import { AutocompleteData } from "components/CityWidget/CityWidget";
import { ShowWeatherType } from "constants/common";
import { WEATHER_CODES_DESCRIPTION_MATCH } from "constants/weather";

export default function* rootSagaWatcher() {
  yield all([
    takeEvery(FETCH_GEO, fetchGeoWorker),
    takeEvery(HANDLE_DATA_FROM_AUTOCOMPLETE, handleDataFromAutocompleteWorker),
    takeEvery(FETCH_OPENWEATHERMAP, fetchOpenweathermapWorker),
    takeEvery(FETCH_WEATHERBIT_DAILY, fetchWeatherbitDailyWorker),
    takeEvery(FETCH_WEATHERBIT_HOURLY, fetchWeatherbitHourlyWorker),
    takeEvery(FETCH_CALENDAR_EVENTS, fetchCalendarEventsWorker),
  ]);
}

function* fetchGeoWorker() {
  try {
    const geo: GetGeoResponse = yield call(fetchGeo);
    yield put(setGeo(geo));
    yield put(fetchOpenweathermap());
    yield put(fetchWeatherbitDaily());
    yield put(fetchWeatherbitHourly());
  } catch (error: any) {
    showError("Error occurs while fetching geo data");
  }
}

function* handleDataFromAutocompleteWorker(action: {
  type: string;
  payload: AutocompleteData;
}) {
  const { location } = yield select((state) => state.geo);
  if (action.payload.location !== location) {
    try {
      const timeZone: string = yield fetchTimezoneByCoordinates(
        action.payload.latitude,
        action.payload.longitude,
      );
      yield put(
        setGeo({
          location: action.payload.location,
          timeZone,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        }),
      );
      yield put(fetchOpenweathermap());
      yield put(fetchWeatherbitDaily());
      yield put(fetchWeatherbitHourly());
    } catch (error: any) {
      showError("Error occurs while handling data from google autocomplete");
    }
  }
}

function* fetchOpenweathermapWorker() {
  try {
    const { latitude, longitude } = yield select((state) => state.geo);
    if (latitude === null || longitude === null) {
      throw new Error();
    }
    let OWMHours: FetchForecastReturn = yield call(
      fetchOpenweathermapForecast,
      latitude,
      longitude,
    );
    OWMHours = yield addIDsToWeatherData(OWMHours);
    yield put(setOpenweathermapHourly(OWMHours));
    let OWMDays: FetchForecastReturn = yield call(
      transformHoursToDaysWeather,
      OWMHours,
    );
    OWMDays = yield addIDsToWeatherData(OWMDays);
    yield put(setOpenweathermapDaily(OWMDays));
    if (OWMDays.length > 0) {
      yield put(
        setBgSearchPhrase(
          WEATHER_CODES_DESCRIPTION_MATCH[OWMDays[0].weatherCode].toLowerCase(),
        ),
      );
    }
    yield put(
      setBgSearchPhrase(
        WEATHER_CODES_DESCRIPTION_MATCH[OWMDays[0].weatherCode].toLowerCase(),
      ),
    );
  } catch (error: any) {
    showError(
      "Error occurs while fetching weather forecast from Openweathermap",
    );
  }
}

function* fetchWeatherbitDailyWorker() {
  try {
    const { latitude, longitude } = yield select((state) => state.geo);
    if (latitude === null || longitude === null) {
      throw new Error();
    }
    let WBDaily: FetchForecastReturn = yield call(
      fetchWeatherbitForecast,
      ShowWeatherType.DAILY,
      latitude,
      longitude,
    );
    WBDaily = yield addIDsToWeatherData(WBDaily);
    yield put(setWeatherbitDaily(WBDaily));
  } catch (error: any) {
    showError("Error occurs while fetching daily forecast from Weatherbit");
  }
}

function* fetchWeatherbitHourlyWorker() {
  try {
    const { latitude, longitude } = yield select((state) => state.geo);
    if (latitude === null || longitude === null) {
      throw new Error();
    }
    let WBHourly: FetchForecastReturn = yield call(
      fetchWeatherbitForecast,
      ShowWeatherType.HOURLY,
      latitude,
      longitude,
    );
    WBHourly = addIDsToWeatherData(WBHourly);
    yield put(setWeatherbitHourly(WBHourly));
  } catch (error: any) {
    showError("Error occurs while fetching hourly forecast from Weatherbit");
  }
}

const getCalendarEvents = async (): Promise<Array<CalendarEvent>> => {
  const calendarEvents = await apiCalendar
    .listUpcomingEvents(3)
    .then(({ result }: any) => result.items);
  return calendarEvents.map((el: CalendarEvent) => {
    return {
      id: el.id,
      summary: el.summary,
      start: { dateTime: el.start.dateTime },
      end: { dateTime: el.end.dateTime },
      htmlLink: el.htmlLink,
    };
  });
};

function* fetchCalendarEventsWorker() {
  try {
    const payload: Array<CalendarEvent> = yield call(getCalendarEvents);
    yield put(setCalendarEvents(payload));
  } catch (error: any) {
    showError("Error occurs while fetching google calendar events");
  }
}

function showError(message: string) {
  toaster.addToast(message, "Attention", { type: "danger", lifeTime: 3000 });
}

function addIDsToWeatherData(arr: FetchForecastReturn): FetchForecastReturn {
  return arr.map((el) => ({ ...el, id: uuid() }));
}
