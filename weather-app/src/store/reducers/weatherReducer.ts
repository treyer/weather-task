import {
  SET_OPENWEATHERMAP_DAILY,
  SET_OPENWEATHERMAP_HOURLY,
  SET_WEATHERBIT_DAILY,
  SET_WEATHERBIT_HOURLY,
} from "store/constants";
import { WeatherAction, WeatherState } from "store/types";

const initialValue: WeatherState = {
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
    case SET_OPENWEATHERMAP_DAILY:
      return { ...state, openweathermapDaily: [...payload] };
    case SET_OPENWEATHERMAP_HOURLY:
      return { ...state, openweathermapHourly: [...payload] };
    case SET_WEATHERBIT_DAILY:
      return { ...state };
    case SET_WEATHERBIT_HOURLY:
      return { ...state };
    default:
      return state;
  }
};

export default weatherReducer;
