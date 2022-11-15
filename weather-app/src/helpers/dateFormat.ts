import { EN_US_LOCALE } from "constants/common";

const formatToCurrentDate = (date: Date, timeZone: string) => {
  return date
    .toLocaleTimeString(EN_US_LOCALE, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone,
    })
    .split("at")[0];
};

export default formatToCurrentDate;
