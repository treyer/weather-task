import { fetchImageSrc } from "api/API";
import CalendarBlock from "components/CalendarBlock/CalendarBlock";
import InfoBlock from "components/InfoBlock/InfoBlock";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";

import { useEffect, useState } from "react";
import { Background, Content, Wrapper } from "./components";

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
      </Content>
    </Wrapper>
  );
}

export default MainLayout;
