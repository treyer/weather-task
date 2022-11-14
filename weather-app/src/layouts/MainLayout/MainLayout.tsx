import { useEffect, useState } from "react";
import { Background, Content, Wrapper } from "./components";

type Props = {
  bgUrl: string;
};

function MainLayout({ bgUrl }: Props) {
  const [bgImgSrc, setBgImgSrc] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const img = new Image();
      const request = await fetch(bgUrl);
      const photo = await request.json();
      img.src = photo.urls.regular;
      img.onload = () => {
        setBgImgSrc(`url(${img.src})`);
      };
    }

    fetchImage();
  }, [bgUrl]);

  return (
    <Wrapper>
      <Background imgSrc={bgImgSrc} />
      <Content imgSrc={bgImgSrc} />
    </Wrapper>
  );
}

export default MainLayout;
