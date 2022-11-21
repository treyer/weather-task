import styled from "styled-components";

import { COLOR_WHITE } from "constants/colors";

type Props = {
  imgSrc: string;
};

export const ItemWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  height: 168px;
  margin 2px;
  padding: 5px;

  background: url(/assets/svg/${({ imgSrc }) =>
    imgSrc}) center center no-repeat;
  background-size: 150px 70px;
  outline: 1px solid white;
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
