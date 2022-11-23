import dateFormat from "dateformat";

import { EN_US_LOCALE } from "constants/common";

export type DateFormatted = [string | null, string | null];

const getTodayDate = (): string => {
  return dateFormat(new Date(), "yyyy-mm-dd");
};

const getTomorrowDate = (): string => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return dateFormat(date, "yyyy-mm-dd");
};

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
    if (dateInString === getTodayDate()) return ["Today", null];
    if (dateInString === getTomorrowDate()) return ["Tomorrow", null];
    return [dateInString.split("-").reverse().join("."), null];
  }
  if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateInString)) {
    let date: string | null | undefined =
      dateInString.match(/\d{4}-\d{2}-\d{2}/)?.[0];
    if (date) {
      if (date === getTodayDate()) date = "Today";
      if (date === getTomorrowDate()) date = "Tomorrow";
    }
    let time: string | null | undefined =
      dateInString.match(/\d{2}:\d{2}:\d{2}/)?.[0];
    if (time) {
      time = time
        .split(":")
        .filter((_, index, arr) => index !== arr.length - 1)
        .join(":");
    }
    return [!date ? null : date, !time ? null : time];
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
