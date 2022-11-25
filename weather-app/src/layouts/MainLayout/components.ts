import styled from "styled-components";

type Prop = {
  imgSrc: string;
  screenWidth?: number;
};

type PropWidth = {
  screenWidth: number;
};

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`;

export const LineWrapper = styled.div<PropWidth>`
  display: flex;
  flex-direction: ${({ screenWidth }) =>
    screenWidth > 535 ? "row" : "column"};
  justify-content: space-between;

  width: 100%;
  height: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small ? theme.sizes[8] : 70}px;
`;

export const Background = styled.div<Prop>`
  width: 100%;
  height: 100vh;

  background: center/cover, ${({ theme }) => theme.colors.translucentBlack};
  background-image: ${({ imgSrc }) => imgSrc};
  background-blend-mode: multiply;

  transition: background-image 1s ease-in-out;
  filter: sepia(60%);
  filter: blur(3px);
`;

export const Content = styled.main<Prop>`
  position: absolute;
  top: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.med ? 50 : 0}px;
  bottom: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.med ? 50 : 0}px;
  right: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.med ? 50 : 0}px;
  left: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.med ? 50 : 0}px;

  min-width: 320px;

  background: center/cover, ${({ theme }) => theme.colors.lightTranslucentBlack};
  background-image: ${({ imgSrc }) => imgSrc};
  background-blend-mode: multiply;
  border-radius: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.med
      ? theme.radiuses[1]
      : theme.radiuses[0]}px;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  transition: background-image 1s ease-in-out;
`;

export const SettingsPanelWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  height: ${({ theme }) => theme.sizes[5]}px;
  margin-right: ${({ theme }) => theme.spaces[3]}px;
`;
