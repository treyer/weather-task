import { FetchForecastReturn, WeatherData } from "api/types";

interface DatesObj {
  [key: string]: {
    minTemperature?: number;
    maxTemperature?: number;
    weatherCode: number[];
    dateInText: string;
  };
}

interface CountObj {
  [key: string]: number;
}

const findElWithMaxEntriesCount = (arr: number[]): number => {
  const countMap = arr.reduce((res, el) => {
    if (el in res) {
      res[String(el)] += 1;
    } else {
      res[el] = 1;
    }
    return res;
  }, {} as CountObj);
  const maxCount = Math.max(...Object.values(countMap));
  const entry = Object.entries(countMap).find((el) => el[1] === maxCount);
  if (entry) {
    return Number(entry[0]);
  }
  return 900;
};

const transformHoursToDaysWeather = (
  hourlyForecastArr: FetchForecastReturn,
): FetchForecastReturn => {
  const objectMap = hourlyForecastArr.reduce((res, el: WeatherData) => {
    const date: string = el.dateInText.split(" ")[0];
    if (date in res) {
      if (Number(res[date].minTemperature) > Number(el.temperature)) {
        res[date].minTemperature = el.temperature;
      }
      if (Number(res[date].maxTemperature) < Number(el.temperature)) {
        res[date].maxTemperature = el.temperature;
      }
      res[date].weatherCode.push(el.weatherCode);
    } else {
      res[date] = {
        dateInText: date,
        weatherCode: [el.weatherCode],
        minTemperature: el.temperature,
        maxTemperature: el.temperature,
      };
    }
    return res;
  }, {} as DatesObj);
  return Object.values(objectMap).map((el) => {
    return {
      dateInText: el.dateInText,
      weatherCode: findElWithMaxEntriesCount(el.weatherCode),
      minTemperature: el.minTemperature,
      maxTemperature: el.maxTemperature,
    };
  });
};

export default transformHoursToDaysWeather;
