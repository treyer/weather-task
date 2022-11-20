import { FetchForecastReturn } from "api/types";
import { ShowWeatherType, WeatherSource } from "constants/common";
import {
  SET_OPENWEATHERMAP_DAILY,
  SET_OPENWEATHERMAP_HOURLY,
  SET_WEATHERBIT_DAILY,
  SET_WEATHERBIT_HOURLY,
  SET_WEATHER_SHOW_TYPE,
  SET_WEATHER_SOURCE,
} from "store/actions/constants";
import { WeatherAction, WeatherState } from "store/types";

const initialValue: WeatherState = {
  showType: ShowWeatherType.HOURLY,
  weatherSource: WeatherSource.OPENWEATHERMAP,
  openweathermapDaily: [],
  openweathermapHourly: [],
  weatherbitDaily: [],
  weatherbitHourly: [],
};

const weatherReducer = (
  state: WeatherState = initialValue,
  { type, payload }: WeatherAction,
): WeatherState => {
  switch (type) {
    case SET_WEATHER_SHOW_TYPE:
      return { ...state, showType: payload as ShowWeatherType };
    case SET_WEATHER_SOURCE:
      return { ...state, weatherSource: payload as WeatherSource };
    case SET_OPENWEATHERMAP_DAILY:
      return {
        ...state,
        openweathermapDaily: [...(payload as FetchForecastReturn)],
      };
    case SET_OPENWEATHERMAP_HOURLY:
      return {
        ...state,
        openweathermapHourly: [...(payload as FetchForecastReturn)],
      };
    case SET_WEATHERBIT_DAILY:
      return {
        ...state,
        weatherbitDaily: [...(payload as FetchForecastReturn)],
      };
    case SET_WEATHERBIT_HOURLY:
      return {
        ...state,
        weatherbitHourly: [...(payload as FetchForecastReturn)],
      };
    default:
      return state;
  }
};

export default weatherReducer;
