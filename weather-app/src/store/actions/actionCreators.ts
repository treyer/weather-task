import { FetchForecastReturn, GetGeoResponse } from "api/types";
import { AutocompleteData } from "components/CityWidget/CityWidget";
import { ShowWeatherType, WeatherSource } from "constants/common";
import { CalendarEvent } from "store/types";
import {
  CLEAR_CALENDAR_EVENTS,
  FETCH_CALENDAR_EVENTS,
  FETCH_GEO,
  FETCH_OPENWEATHERMAP,
  FETCH_WEATHERBIT_DAILY,
  FETCH_WEATHERBIT_HOURLY,
  HANDLE_DATA_FROM_AUTOCOMPLETE,
  HIDE_LOADER,
  SET_BG_SEARCH_PHRASE,
  SET_CALENDAR_EVENTS,
  SET_GEO,
  SET_IS_SIGNED_IN,
  SET_OPENWEATHERMAP_DAILY,
  SET_OPENWEATHERMAP_HOURLY,
  SET_WEATHERBIT_DAILY,
  SET_WEATHER_SHOW_TYPE,
  SET_WEATHER_SOURCE,
  SHOW_LOADER,
} from "./constants";

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const setIsSignedIn = (payload: boolean) => ({
  type: SET_IS_SIGNED_IN,
  payload,
});
export const setBgSearchPhrase = (payload: string) => ({
  type: SET_BG_SEARCH_PHRASE,
  payload,
});
export const fetchGeo = () => ({ type: FETCH_GEO });
export const setGeo = (payload: GetGeoResponse) => ({ type: SET_GEO, payload });
export const handleDataFromAutocomplete = (payload: AutocompleteData) => ({
  type: HANDLE_DATA_FROM_AUTOCOMPLETE,
  payload,
});
export const setWeatherShowType = (payload: ShowWeatherType) => ({
  type: SET_WEATHER_SHOW_TYPE,
  payload,
});
export const setWeatherSource = (payload: WeatherSource) => ({
  type: SET_WEATHER_SOURCE,
  payload,
});
export const fetchOpenweathermap = () => ({ type: FETCH_OPENWEATHERMAP });
export const setOpenweathermapHourly = (payload: FetchForecastReturn) => ({
  type: SET_OPENWEATHERMAP_HOURLY,
  payload,
});
export const setOpenweathermapDaily = (payload: FetchForecastReturn) => ({
  type: SET_OPENWEATHERMAP_DAILY,
  payload,
});
export const fetchWeatherbitDaily = () => ({
  type: FETCH_WEATHERBIT_DAILY,
});
export const setWeatherbitDaily = (payload: FetchForecastReturn) => ({
  type: SET_WEATHERBIT_DAILY,
  payload,
});
export const fetchWeatherbitHourly = () => ({
  type: FETCH_WEATHERBIT_HOURLY,
});
export const setWeatherbitHourly = (payload: FetchForecastReturn) => ({
  type: FETCH_WEATHERBIT_HOURLY,
  payload,
});
export const fetchCalendarEvents = () => ({ type: FETCH_CALENDAR_EVENTS });
export const setCalendarEvents = (payload: Array<CalendarEvent> | []) => ({
  type: SET_CALENDAR_EVENTS,
  payload,
});
export const clearCalendarEvents = () => ({ type: CLEAR_CALENDAR_EVENTS });
