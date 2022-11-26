import dateFormat from "dateformat";

import { EN_US_LOCALE } from "constants/common";

export type DateFormatted = [string | null, string | null];

const isToday = (date: Date): boolean => {
  return (
    dateFormat(new Date(), "yyyy-mm-dd") === dateFormat(date, "yyyy-mm-dd")
  );
};

const isTomorrow = (date: Date): boolean => {
  return (
    dateFormat(new Date().setDate(new Date().getDate() + 1), "yyyy-mm-dd") ===
    dateFormat(date, "yyyy-mm-dd")
  );
};

export const formatToCurrentDate = (date: Date, timeZone: string) => {
  return date
    .toLocaleTimeString(EN_US_LOCALE, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone,
    })
    .match(/\w+,\s\w+\s\d+,\s\d+/);
};

export const temperaturePropsToString = (
  temperature: number | undefined,
  minTemperature: number | undefined,
  maxTemperature: number | undefined,
) => {
  if (temperature) return `${Math.round(temperature)}°C`;
  if (minTemperature && maxTemperature) {
    if (Math.round(minTemperature) === Math.round(maxTemperature)) {
      return `${Math.round(minTemperature)}°C`;
    }
    return `${Math.round(minTemperature)}°C … ${Math.round(maxTemperature)}°C`;
  }
  return "";
};

export const dateToWeatherItemFormat = (
  dateInString: string,
): DateFormatted => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateInString)) {
    if (isToday(new Date(dateInString))) return ["Today", null];
    if (isTomorrow(new Date(dateInString))) return ["Tomorrow", null];
    return [dateInString.split("-").reverse().join("."), null];
  }
  if (
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateInString) ||
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(dateInString)
  ) {
    let date = dateFormat(new Date(dateInString), "dd.mm.yyyy");
    if (isToday(new Date(dateInString))) date = "Today";
    if (isTomorrow(new Date(dateInString))) date = "Tomorrow";
    const time = dateFormat(new Date(dateInString), "HH:MM");
    return [date, time];
  }
  return [dateInString, null];
};

export const formatCalendarDate = (date: string): string => {
  if (isToday(new Date(date))) {
    return `Today ${dateFormat(new Date(date), "h:MM TT")}`;
  }
  if (isTomorrow(new Date(date))) {
    return `Tomorrow ${dateFormat(new Date(date), "h:MM TT")}`;
  }
  return dateFormat(new Date(date), "dd.mm.yyyy h:MM TT");
};
