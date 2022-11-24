/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from "react-redux";

import Slider from "react-slick";

import selectWeather from "store/selectors/selectors";
import { RootState } from "store";
import WeatherItem from "components/WeatherItem/WeatherItem";
import Wrapper from "./components";

function WeatherWidget() {
  const weather = useSelector((state: RootState) => selectWeather(state));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {weather.map((el) => (
          <WeatherItem key={el.id} item={el} />
        ))}
      </Slider>
    </Wrapper>
  );
}

export default WeatherWidget;
