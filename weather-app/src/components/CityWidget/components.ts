import { COLOR_WHITE } from "constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  padding-right: 50px;

  color: ${COLOR_WHITE};
`;

export const CountryName = styled.div`
  font-size: 25px;
`;

export const City = styled.div`
  font-size: 35px;
`;
