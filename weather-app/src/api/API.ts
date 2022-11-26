import { ShowWeatherType } from "constants/common";
import axios from "./axios-cache";
import {
  GetGeoResponse,
  OpenweathermapResponse,
  FetchForecastReturn,
  WeatherbitResponse,
} from "./types";

export const fetchImageSrc = async (keywords: string): Promise<string> => {
  const photoUrl = await axios
    .get("https://api.unsplash.com/photos/random?", {
      params: {
        query: keywords,
        orientation: "landscape",
        client_id: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
      },
    })
    .then((res) => res.data)
    .then((photo) => photo.urls.regular);
  return photoUrl;
};

export const fetchGeo = async (): Promise<GetGeoResponse> => {
  const geo = await axios.get("http://ipwho.is/").then((res) => res.data);
  return {
    location: `${geo.city}, ${geo.country}`,
    timeZone: geo.timezone.id,
    latitude: geo.latitude,
    longitude: geo.longitude,
  };
};

export const fetchTimezoneByCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<string> => {
  const timezoneInfo: { timezone: string } = await axios
    .get("https://api.ipgeolocation.io/timezone?", {
      params: {
        apiKey: process.env.REACT_APP_IP_GEOLOCATION,
        lat: latitude,
        long: longitude,
      },
    })
    .then((res) => res.data);

  return timezoneInfo.timezone;
};

export const fetchOpenweathermapForecast = async (
  latitude: number,
  longitude: number,
): Promise<FetchForecastReturn> => {
  const weatherList: OpenweathermapResponse = await axios
    .get("https://api.openweathermap.org/data/2.5/forecast?", {
      params: {
        lat: latitude,
        lon: longitude,
        appid: process.env.REACT_APP_OPENWEATHERMAP_KEY,
        units: "metric",
      },
    })
    .then((res) => res.data);
  const result = weatherList.list.map((el) => ({
    temperature: el.main.temp,
    weatherCode: el.weather[0].id,
    dateInText: el.dt_txt,
  }));
  return result;
};

export const fetchWeatherbitForecast = async (
  type: ShowWeatherType,
  latitude: number,
  longitude: number,
): Promise<FetchForecastReturn> => {
  const weatherList: WeatherbitResponse = await axios
    .get(`https://api.weatherbit.io/v2.0/forecast/${type.toLowerCase()}?`, {
      params: {
        lat: latitude,
        lon: longitude,
        key: process.env.REACT_APP_WEATHERBIT_KEY,
      },
    })
    .then((res) => res.data);
  const result = weatherList.data.map((el) => {
    if (type === ShowWeatherType.HOURLY) {
      return {
        temperature: el.temp,
        weatherCode: el.weather.code,
        dateInText: el.timestamp_local,
      };
    }
    return {
      minTemperature: el.min_temp,
      maxTemperature: el.max_temp,
      weatherCode: el.weather.code,
      dateInText: el.datetime,
    };
  });
  return result;
};
