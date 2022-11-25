import styled from "styled-components";

type Prop = {
  screenWidth: number;
};

export const Wrapper = styled.div<Prop>`
  display: flex;
  flex-direction: column;
  justify-content: end;

  padding-left: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small ? theme.sizes[5] - 5 : theme.sizes[2]}px;

  color: ${({ theme }) => theme.colors.white};
`;

export const TimeWrapper = styled.div<Prop>`
  height: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small
      ? theme.fontSizes[10] + 5
      : theme.fontSizes[7]}px;
  margin-bottom: ${({ theme }) => theme.spaces[1] + 1}px;

  font-size: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small
      ? theme.fontSizes[10]
      : theme.fontSizes[7]}px;
`;

export const DateWrapper = styled.div<Prop>`
  height: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small
      ? theme.fontSizes[4] + 4
      : theme.fontSizes[3] + 2}px;

  font-size: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small ? theme.fontSizes[4] : theme.fontSizes[3]}px;
`;

export const DayTime = styled.span<Prop>`
  margin-left: ${({ theme }) => theme.spaces[1]}px;

  font-size: ${({ screenWidth, theme }) =>
    Number(screenWidth) > theme.size.small ? theme.fontSizes[5] : 14}px;
`;
