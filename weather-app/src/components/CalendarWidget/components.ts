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

  color: white;
`;

export const CalendarTableContainer = styled(TableContainer)`
  position: relative;

  padding: 5px;

  background-color: rgb(0, 0, 0, 0.3);
`;

export const CalendarTableCell = styled(TableCell)`
  color: white !important;
`;

export const CalendarIconButton = styled(IconButton)`
  position: absolute !important;
  top: -27px;
  right: 10px;
`;

export const CalendarLinkIcon = styled(LinkIcon)`
  color: white;
`;

export const CalendarUpdateIcon = styled(CachedIcon)`
  color: white;
`;
