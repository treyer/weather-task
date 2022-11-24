import styled from "styled-components";

type Prop = {
  imgSrc: string;
};

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 150px;
`;

export const Background = styled.div<Prop>`
  width: 100%;
  height: 100vh;

  background: center/cover, rgba(0, 0, 0, 0.5);
  background-image: ${({ imgSrc }) => imgSrc};
  background-blend-mode: multiply;

  transition: background-image 1s ease-in-out;
  filter: sepia(60%);
  filter: blur(3px);
`;

export const Content = styled.main<Prop>`
  position: absolute;
  top: 50px;
  bottom: 50px;
  right: 50px;
  left: 50px;

  background: center/cover, rgba(0, 0, 0, 0.2);
  background-image: ${({ imgSrc }) => imgSrc};
  background-blend-mode: multiply;
  border-radius: 5px;

  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: background-image 1s ease-in-out;
`;

export const SettingsPanelWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 200px;
`;
