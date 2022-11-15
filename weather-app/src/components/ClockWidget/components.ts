import styled from "styled-components";

import { COLOR_WHITE } from "constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  color: ${COLOR_WHITE};
`;

export const TimeWrapper = styled.div`
  height: 85px;
  margin-bottom: 5px;

  font-size: 80px;
`;

export const DateWrapper = styled.div`
  height: 30px;

  font-size: 26px;
`;

export const DayTime = styled.span`
  margin-left: 10px;

  font-size: 30px;
`;
