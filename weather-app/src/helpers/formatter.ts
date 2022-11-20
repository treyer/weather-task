import { EN_US_LOCALE } from "constants/common";

export type DateFormatted = [string | null, string | null];

const getTodayDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const getTomorrowDate = (): string => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
