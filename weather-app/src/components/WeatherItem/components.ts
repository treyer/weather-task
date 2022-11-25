import styled from "styled-components";

type Props = {
  imgSrc: string;
};

export const ItemWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  height: 168px;
  margin ${({ theme }) => theme.spaces[1] - 2}px;
  padding: ${({ theme }) => theme.spaces[1] + 1}px;

  background: url(/assets/svg/${({ imgSrc }) =>
    imgSrc}) center center no-repeat;
  background-size: 150px 70px;
  border: 1px solid white;
`;

export const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const Temperature = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const WeatherDescription = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
