import { createSelector } from "reselect";

import { RootState } from "store";
import { ShowWeatherType, WeatherSource } from "constants/common";
import { FetchForecastReturn } from "api/types";

const selectShowType = (state: RootState) => state.weather.showType;
const selectWeatherSource = (state: RootState) => state.weather.weatherSource;
const selectOpenweathermapDaily = (state: RootState) =>
  state.weather.openweathermapDaily;
const selectOpenweathermapHourly = (state: RootState) =>
  state.weather.openweathermapHourly;
const selectWeatherbitDaily = (state: RootState) =>
  state.weather.weatherbitDaily;
const selectWeatherbitHourly = (state: RootState) =>
  state.weather.weatherbitHourly;

const selectWeather = createSelector(
  [
    selectShowType,
    selectWeatherSource,
    selectOpenweathermapDaily,
    selectOpenweathermapHourly,
    selectWeatherbitDaily,
    selectWeatherbitHourly,
  ],
  (
    showType,
    weatherSource,
    OpenweathermapDailyArr,
    OpenweathermapHourlyArr,
    WeatherbitDailyArr,
    WeatherbitHourlyArr,
  ): FetchForecastReturn | [] => {
    if (weatherSource === WeatherSource.OPENWEATHERMAP) {
      if (showType === ShowWeatherType.DAILY) {
        return OpenweathermapDailyArr;
      }
      if (showType === ShowWeatherType.HOURLY) {
        return OpenweathermapHourlyArr;
      }
    }
    if (weatherSource === WeatherSource.WEATHERBIT) {
      if (showType === ShowWeatherType.DAILY) {
        return WeatherbitDailyArr;
      }
      if (showType === ShowWeatherType.HOURLY) {
        return WeatherbitHourlyArr;
      }
    }
    return OpenweathermapDailyArr;
  },
);

export default selectWeather;