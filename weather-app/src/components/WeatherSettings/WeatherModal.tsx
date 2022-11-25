import { useDispatch, useSelector } from "react-redux";

import { selectShowType, selectWeatherSource } from "store/selectors/selectors";
import { RootState } from "store";
import { ShowWeatherType, WeatherSource } from "constants/common";
import { setWeatherShowType, setWeatherSource } from "store/actions";
import { CloseButton, Inner, ModalWrapper } from "./components";
import WeatherSelect from "./WeatherSelect";

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
        <WeatherSelect
          id="forecast-type"
          value={showType}
          label="Forecast type"
          menuItems={[ShowWeatherType.DAILY, ShowWeatherType.HOURLY]}
          callback={handleChangeShowType}
        />
        <WeatherSelect
          id="forecast-source"
          value={weatherSource}
          label="Forecast source"
          menuItems={[WeatherSource.OPENWEATHERMAP, WeatherSource.WEATHERBIT]}
          callback={handleChangeWeatherSource}
        />
      </Inner>
    </ModalWrapper>
  );
}

export default WeatherModal;
