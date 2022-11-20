import { WeatherData } from "api/types";
import {
  WEATHER_CODES_DESCRIPTION_MATCH,
  WEATHER_CODES_IMG_MATCH_DAY,
} from "constants/weather";
import {
  dateToWeatherItemFormat,
  temperaturePropsToString,
} from "helpers/formatter";
import {
  ItemWrapper,
  ItemHeaderWrapper,
  Date,
  Temperature,
  WeatherDescription,
} from "./components";

type Props = {
  item: WeatherData;
};

function WeatherItem({ item }: Props) {
  const [dateFormatted, timeFormatted] = dateToWeatherItemFormat(
    item.dateInText,
  );

  return (
    <ItemWrapper imgSrc={WEATHER_CODES_IMG_MATCH_DAY[item.weatherCode]}>
      <ItemHeaderWrapper>
        <Date>
          {dateFormatted}
          <br />
          {timeFormatted}
        </Date>
        <Temperature>
          {temperaturePropsToString(
            item.temperature,
            item.minTemperature,
            item.maxTemperature,
          )}
        </Temperature>
      </ItemHeaderWrapper>
      <WeatherDescription>
        {WEATHER_CODES_DESCRIPTION_MATCH[item.weatherCode]}
      </WeatherDescription>
    </ItemWrapper>
  );
}

export default WeatherItem;
