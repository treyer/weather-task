/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import selectWeather from "store/selectors/selectors";
import { RootState } from "store";
import WeatherItem from "components/WeatherItem/WeatherItem";
import Wrapper from "./components";

function WeatherWidget() {
  const weather = useSelector((state: RootState) => selectWeather(state));
  const key = useRef(1);

  //  use key to force rerender Slider on weather array change to fix
  //  bug when after rerender Slider has WeatherItems scroll position outside the screen
  useEffect(() => {
    key.current += 1;
  }, [weather]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <Wrapper>
      <Slider {...settings} key={key.current}>
        {weather.map((el) => (
          <WeatherItem key={el.id} item={el} />
        ))}
      </Slider>
    </Wrapper>
  );
}

export default WeatherWidget;
