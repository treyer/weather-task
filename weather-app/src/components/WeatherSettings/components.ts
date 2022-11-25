import styled from "styled-components";
import { FormControl } from "@mui/material";

import Card from "@mui/material/Card";

export const WeatherSettingsWrapper = styled.div`
  position: relative;
`;

export const SettingsIcon = styled.button`
  z-index: 10;

  width: ${({ theme }) => theme.sizes[2]}px;
  height: ${({ theme }) => theme.sizes[2]}px;
  padding: 0;

  background: url(/assets/svg/settings.svg) center center no-repeat;
  background-size: ${({ theme }) => theme.sizes[2]}px
    ${({ theme }) => theme.sizes[2]}px;
  border: none;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    transform: rotate(0.5turn);
  }
`;

export const CoverLayer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
`;

export const ModalWrapper = styled(Card)`
  position: absolute;
  top: ${({ theme }) => theme.spaces[4] + 6}px;
  right: -${({ theme }) => theme.spaces[2]}px;
  z-index: 10;

  width: 250px;
  height: 150px;

  overflow: visible !important;

  &:before {
    content: " ";

    position: absolute;
    z-index: 10;

    top: -${({ theme }) => theme.spaces[3] - 2}px;
    right: ${({ theme }) => theme.spaces[3] - 2}px;

    border: ${({ theme }) => theme.spaces[2] - 1}px solid transparent;
    border-bottom: ${({ theme }) => theme.spaces[2] - 1}px solid
      ${({ theme }) => theme.colors.white};
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces[2] + 2}px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spaces[1] + 1}px;
  right: ${({ theme }) => theme.spaces[1] + 1}px;

  padding: 0;

  width: 30px;
  height: 30px;
  border: none;

  font-size: ${({ theme }) => theme.fontSizes[5] - 2}px;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const WeatherFormControl = styled(FormControl)`
  width: calc(100% - 40px);
  margin-top: 15px !important;
`;
