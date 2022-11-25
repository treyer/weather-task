import { FetchForecastReturn } from "api/types";
import { ShowWeatherType, WeatherSource } from "constants/common";

export type AppState = {
  loading: boolean;
  loadingCount: number;
  isSignedIn: boolean;
  bgSearchPhrase: string;
};

export type AppAction = {
  type: string;
  payload?: boolean | string;
};

export type GeoState = {
  location: string;
  timeZone: string;
  latitude: number | null;
  longitude: number | null;
};

export type GeoAction = {
  type: string;
  payload: GeoState;
};

export type WeatherState = {
  showType: ShowWeatherType;
  weatherSource: WeatherSource;
  openweathermapDaily: FetchForecastReturn | [];
  openweathermapHourly: FetchForecastReturn | [];
  weatherbitDaily: FetchForecastReturn | [];
  weatherbitHourly: FetchForecastReturn | [];
};

export type WeatherAction = {
  type: string;
  payload: FetchForecastReturn | ShowWeatherType | WeatherSource;
};

export interface CalendarEvent {
  id: string;
  summary: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  htmlLink: string;
}

export type CalendarState = {
  calendarEvents: Array<CalendarEvent> | [];
};

export type CalendarAction = {
  type: string;
  payload?: Array<CalendarEvent>;
};
