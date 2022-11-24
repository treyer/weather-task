import { useEffect, useState } from "react";
// @ts-ignore
import { ToastContainer } from "react-toaster-lib";

import { fetchImageSrc } from "api/API";
import CityWidget from "components/CityWidget/CityWidget";
import ClockWidget from "components/ClockWidget/ClockWidget";
import AuthButton from "components/AuthButton/AuthButton";
import WeatherSettings from "components/WeatherSettings/WeatherSettings";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import WeatherUpdateButton from "components/WeatherUpdateButton/WeatherUpdateButton";
import CalendarWidget from "components/CalendarWidget/CalendarWidget";
import {
  Background,
  Content,
  LineWrapper,
  SettingsPanelWrapper,
  Wrapper,
} from "./components";

function MainLayout() {
  const [bgImgSrc, setBgImgSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const img = new Image();
      img.src = await fetchImageSrc("weather, rain");
      img.onload = () => {
        setBgImgSrc(`url(${img.src})`);
      };
    };
    fetchImage();
  }, []);

  return (
    <Wrapper>
      <Background imgSrc={bgImgSrc} />
      <Content imgSrc={bgImgSrc}>
        <LineWrapper>
          <ClockWidget />
          <CityWidget />
        </LineWrapper>
        <CalendarWidget />
        <WeatherWidget />
        <SettingsPanelWrapper>
          <AuthButton />
          <WeatherUpdateButton />
          <WeatherSettings />
        </SettingsPanelWrapper>
      </Content>
      <ToastContainer />
    </Wrapper>
  );
}

export default MainLayout;
