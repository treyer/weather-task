import { COLOR_WHITE } from "constants/colors";
import styled from "styled-components";

type Props = {
  imgSrc: string;
};

export const ItemWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 168px;
  background: url(/assets/svg/${({ imgSrc }) =>
    imgSrc}) center center no-repeat;
  background-size: 150px 70px;

  padding: 5px;
  box-sizing: border-box;
  outline: 1px solid white;
  margin 2px;
`;

export const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div`
  color: ${COLOR_WHITE};
`;

export const Temperature = styled.div`
  color: ${COLOR_WHITE};
`;

export const WeatherDescription = styled.div`
  color: ${COLOR_WHITE};
`;
