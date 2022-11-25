import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import { ToastContainer, toaster } from "react-toaster-lib";
import { PulseLoader } from "react-spinners";
import { useWindowWidth } from "@react-hook/window-size";
import { ThemeConsumer } from "styled-components";

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
  const screenWidth = useWindowWidth();
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
      const src = await fetchImageSrc(bgSearchPhrase)
        .then((image) => image)
        .catch(() => {
          toaster.addToast(
            "Error while fetching background image from Unsplash",
            "Attention!",
            { type: "danger", lifeTime: 3000 },
          );
        });
      img.src = src || "";
      img.onload = () => {
        setBgImgSrc(`url(${img.src})`);
      };
    };
    fetchImage();
  }, [bgSearchPhrase]);

  return (
    <Wrapper>
      <ThemeConsumer>
        {(theme) => (
          <>
            {screenWidth > theme.size.med && <Background imgSrc={bgImgSrc} />}
            <Content imgSrc={bgImgSrc} screenWidth={screenWidth}>
              <SettingsPanelWrapper>
                <AuthButton />
                <WeatherUpdateButton />
                <WeatherSettings />
              </SettingsPanelWrapper>
              <LineWrapper screenWidth={screenWidth}>
                <ClockWidget />
                <CityWidget />
              </LineWrapper>
              <CalendarWidget />
              <WeatherWidget />
              <PulseLoader
                cssOverride={override}
                color="white"
                speedMultiplier={0.7}
                loading={loading}
              />
            </Content>
            <ToastContainer />
          </>
        )}
      </ThemeConsumer>
    </Wrapper>
  );
}

export default MainLayout;
