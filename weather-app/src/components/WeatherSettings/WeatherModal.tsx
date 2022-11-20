import { useDispatch, useSelector } from "react-redux";
import { InputLabel, MenuItem, Select } from "@mui/material";

import { selectShowType, selectWeatherSource } from "store/selectors/selectors";
import { RootState } from "store";
import { ShowWeatherType, WeatherSource } from "constants/common";
import { setWeatherShowType, setWeatherSource } from "store/actions";
import {
  CloseButton,
  Inner,
  ModalWrapper,
  WeatherFormControl,
} from "./components";

type Props = {
  closeCallback: () => void;
};

function WeatherModal({ closeCallback }: Props) {
  const dispatch = useDispatch();
  const showType = useSelector((state: RootState) => selectShowType(state));
  const weatherSource = useSelector((state: RootState) =>
    selectWeatherSource(state),
  );

  const handleChangeShowType = (event: any) => {
    dispatch(setWeatherShowType(event.target.value));
  };

  const handleChangeWeatherSource = (event: any) => {
    dispatch(setWeatherSource(event.target.value));
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={closeCallback}>×</CloseButton>
      <Inner>
        <WeatherFormControl variant="standard">
          <InputLabel id="forecast-type">Forecast type</InputLabel>
          <Select
            labelId="forecast-type-label"
            id="forecast-type"
            value={showType}
            onChange={handleChangeShowType}
            label="Forecast type"
          >
            <MenuItem value={ShowWeatherType.DAILY}>
              {ShowWeatherType.DAILY}
            </MenuItem>
            <MenuItem value={ShowWeatherType.HOURLY}>
              {ShowWeatherType.HOURLY}
            </MenuItem>
          </Select>
        </WeatherFormControl>

        <WeatherFormControl variant="standard">
          <InputLabel id="forecast-source">Forecast source</InputLabel>
          <Select
            labelId="forecast-source-label"
            id="forecast-source"
            value={weatherSource}
            onChange={handleChangeWeatherSource}
            label="Forecast source"
          >
            <MenuItem value={WeatherSource.OPENWEATHERMAP}>
              {WeatherSource.OPENWEATHERMAP}
            </MenuItem>
            <MenuItem value={WeatherSource.WEATHERBIT}>
              {WeatherSource.WEATHERBIT}
            </MenuItem>
          </Select>
        </WeatherFormControl>
      </Inner>
    </ModalWrapper>
  );
}

export default WeatherModal;
