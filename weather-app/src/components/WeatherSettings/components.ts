import { FormControl } from "@mui/material";

import Card from "@mui/material/Card";
import { COLOR_BLACK, COLOR_GREY, COLOR_WHITE } from "constants/colors";

import styled from "styled-components";

export const WeatherSettingsWrapper = styled.div`
  position: relative;
`;

export const SettingsIcon = styled.button`
  z-index: 10;

  width: 25px;
  height: 25px;
  padding: 0;

  background: url(/assets/svg/settings.svg) center center no-repeat;
  background-size: 25px 25px;
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

  background-color: ${COLOR_BLACK};
  opacity: 0.6;
`;

export const ModalWrapper = styled(Card)`
  position: absolute;
  top: 38px;
  right: -8px;
  z-index: 10;

  width: 250px;
  height: 150px;

  overflow: visible !important;

  &:before {
    content: " ";

    position: absolute;
    z-index: 10;

    top: -14px;
    right: 14px;

    border: 7px solid transparent;
    border-bottom: 7px solid ${COLOR_WHITE};
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  padding: 0;

  width: 30px;
  height: 30px;
  border: none;

  font-size: 30px;

  cursor: pointer;

  &:hover {
    color: ${COLOR_GREY};
  }
`;

export const WeatherFormControl = styled(FormControl)`
  width: calc(100% - 40px);
  margin-top: 15px !important;
`;
