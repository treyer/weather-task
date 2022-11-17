export interface GetGeoResponse {
  city: string;
  countryName: string;
  timeZone: string;
  latitude: number;
  longitude: number;
}

export interface OpenweathermapResponse {
  cod: string;
  list: Array<OpenweathermapItem>;
}

interface OpenweathermapItem {
  main: { temp: number };
  weather: [{ id: number }];
  dt_txt: string;
}

interface WeatherData {
  temperature?: number;
  minTemperature?: number;
  maxTemperature?: number;
  weatherCode: number;
  dateInText: string;
}

export interface WeatherbitResponse {
  data: Array<WeatherbitItem>;
}

interface WeatherbitItem {
  temp?: number;
  max_temp?: number;
  min_temp?: number;
  timestamp_local: string;
  weather: { code: number };
}

export type FetchForecastReturn = Array<WeatherData>;
