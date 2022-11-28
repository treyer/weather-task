import { useDispatch } from "react-redux";

import {
  fetchOpenweathermap,
  fetchWeatherbitDaily,
  fetchWeatherbitHourly,
} from "store/actions";
import UpdateButton from "./components";

function WeatherUpdateButton() {
  const dispatch = useDispatch();

  const handleWeatherUpdate = () => {
    dispatch(fetchOpenweathermap());
    dispatch(fetchWeatherbitDaily());
    dispatch(fetchWeatherbitHourly());
  };

  return <UpdateButton onClick={handleWeatherUpdate} title="Update forecast" />;
}

export default WeatherUpdateButton;
