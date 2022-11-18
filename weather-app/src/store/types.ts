import { FetchForecastReturn } from "api/types";

export type AppState = {
  loading: boolean;
};

export type AppAction = {
  type: string;
};

export type GeoState = {
  city: string;
  countryName: string;
  timeZone: string;
  latitude: number | null;
  longitude: number | null;
};

export type GeoAction = {
  type: string;
  payload: GeoState;
};

export type WeatherState = {
  openweathermapDaily: FetchForecastReturn | [];
  openweathermapHourly: FetchForecastReturn | [];
  weatherbitDaily: FetchForecastReturn | [];
  weatherbitHourly: FetchForecastReturn | [];
};

export type WeatherAction = {
  type: string;
  payload: FetchForecastReturn;
};
