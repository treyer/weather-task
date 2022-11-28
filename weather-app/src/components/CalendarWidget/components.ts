import styled from "styled-components";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import LinkIcon from "@mui/icons-material/Link";
import CachedIcon from "@mui/icons-material/Cached";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 50%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.white};
`;

export const CalendarTableContainer = styled(TableContainer)`
  position: relative;

  padding: ${({ theme }) => theme.spaces[1]}px;

  background-color: ${({ theme }) => theme.colors.lightTranslucentBlack};
  overflow-x: visible !important;
`;

export const CalendarTableCell = styled(TableCell)`
  color: ${({ theme }) => theme.colors.white} !important;
`;

export const CalendarIconButton = styled(IconButton)`
  position: absolute !important;
  top: -${({ theme }) => theme.spaces[4] + 5}px;
  right: ${({ theme }) => theme.spaces[2] + 2}px;
`;

export const CalendarLinkIcon = styled(LinkIcon)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CalendarUpdateIcon = styled(CachedIcon)`
  color: ${({ theme }) => theme.colors.white};
`;
