import {
  SET_OPENWEATHERMAP,
  SET_WEATHERBIT_DAILY,
  SET_WEATHERBIT_HOURLY,
} from "store/constants";
import { WeatherAction, WeatherState } from "store/types";

const initialValue: WeatherState = {
  openweathermap: [],
  weatherbitDaily: [],
  weatherbitHourly: [],
};

const weatherReducer = (
  state: WeatherState = initialValue,
  { type, payload }: WeatherAction,
): WeatherState => {
  switch (type) {
    case SET_OPENWEATHERMAP:
      return { ...state, openweathermap: [...payload] };
    case SET_WEATHERBIT_DAILY:
      return { ...state };
    case SET_WEATHERBIT_HOURLY:
      return { ...state };
    default:
      return state;
  }
};

export default weatherReducer;
