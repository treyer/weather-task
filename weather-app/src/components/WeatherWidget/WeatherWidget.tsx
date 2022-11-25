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
    responsive: [
      {
        breakpoint: 450,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 3, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 4, slidesToScroll: 2, infinite: false },
      },
    ],
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
