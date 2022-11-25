import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import { ToastContainer } from "react-toaster-lib";
import { PulseLoader } from "react-spinners";

import { fetchImageSrc } from "api/API";
import { selectBgSearchPhrase, selectLoading } from "store/selectors/selectors";
import { RootState } from "store";
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
  const bgSearchPhrase = useSelector((state: RootState) =>
    selectBgSearchPhrase(state),
  );
  const loading = useSelector((state: RootState) => selectLoading(state));
  const [bgImgSrc, setBgImgSrc] = useState("");
  const override: CSSProperties = {
    position: "fixed",
    top: "calc(50% - 12px)",
    right: "calc(50% - 28px)",
  };

  useEffect(() => {
    const fetchImage = async () => {
      const img = new Image();
      img.src = await fetchImageSrc(bgSearchPhrase);
      img.onload = () => {
        setBgImgSrc(`url(${img.src})`);
      };
    };
    fetchImage();
  }, [bgSearchPhrase]);

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
        <PulseLoader
          cssOverride={override}
          color="white"
          speedMultiplier={0.7}
          loading={loading}
        />
      </Content>
      <ToastContainer />
    </Wrapper>
  );
}

export default MainLayout;
