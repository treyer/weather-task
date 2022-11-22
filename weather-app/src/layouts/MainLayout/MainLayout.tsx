import { useEffect, useState } from "react";
// @ts-ignore
import { ToastContainer } from "react-toaster-lib";

import { fetchImageSrc } from "api/API";
import AuthButton from "components/AuthButton/AuthButton";
import CalendarBlock from "components/CalendarBlock/CalendarBlock";
import InfoBlock from "components/InfoBlock/InfoBlock";
import WeatherSettings from "components/WeatherSettings/WeatherSettings";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import WeatherUpdateButton from "components/WeatherUpdateButton/WeatherUpdateButton";
import {
  Background,
  Content,
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
        <InfoBlock />
        <CalendarBlock />
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
