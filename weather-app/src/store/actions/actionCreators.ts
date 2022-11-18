import { FetchForecastReturn, GetGeoResponse } from "api/types";
import { ShowWeatherType, WeatherSource } from "constants/common";
import {
  FETCH_GEO,
  FETCH_OPENWEATHERMAP,
  FETCH_WEATHERBIT_DAILY,
  FETCH_WEATHERBIT_HOURLY,
  HIDE_LOADER,
  SET_GEO,
  SET_OPENWEATHERMAP_DAILY,
  SET_OPENWEATHERMAP_HOURLY,
  SET_WEATHERBIT_DAILY,
  SET_WEATHER_SHOW_TYPE,
  SET_WEATHER_SOURCE,
  SHOW_LOADER,
} from "./constants";

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const fetchGeo = () => ({ type: FETCH_GEO });
export const setGeo = (payload: GetGeoResponse) => ({ type: SET_GEO, payload });
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
export const fetchWeatherbitDaily = () => ({ type: FETCH_WEATHERBIT_DAILY });
export const setWeatherbitDaily = (payload: FetchForecastReturn) => ({
  type: SET_WEATHERBIT_DAILY,
  payload,
});
export const fetchWeatherbitHourly = () => ({ type: FETCH_WEATHERBIT_HOURLY });
export const setWeatherbitHourly = (payload: FetchForecastReturn) => ({
  type: FETCH_WEATHERBIT_HOURLY,
  payload,
});
