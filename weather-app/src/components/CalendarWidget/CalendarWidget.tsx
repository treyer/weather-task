import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { useWindowWidth } from "@react-hook/window-size";

import { RootState } from "store";
import { selectCalendarEvents } from "store/selectors/selectors";
import { CalendarEvent } from "store/types";
import { formatCalendarDate } from "helpers/formatter";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import {
  Wrapper,
  CalendarTableContainer,
  CalendarLinkIcon,
  CalendarTableCell,
} from "./components";
import CalendarUpdateButton from "./CalendarUpdateButton";

function CalendarWidget() {
  const calendarEvents = useSelector((store: RootState) =>
    selectCalendarEvents(store),
  );
  const screenWidth = useWindowWidth();

  return (
    <ErrorBoundary>
      <Wrapper>
        {calendarEvents.length > 0 && (
          <CalendarTableContainer>
            <CalendarUpdateButton />
            <Table size="small">
              <TableHead>
                <TableRow>
                  <CalendarTableCell align="center">Start</CalendarTableCell>
                  {screenWidth > 650 && (
                    <CalendarTableCell align="center">End</CalendarTableCell>
                  )}
                  <CalendarTableCell align="center">Event</CalendarTableCell>
                  <CalendarTableCell align="center">Link</CalendarTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calendarEvents.map((el: CalendarEvent) => (
                  <TableRow key={el.id}>
                    <CalendarTableCell align="center">
                      {formatCalendarDate(el.start.dateTime)}
                    </CalendarTableCell>
                    {screenWidth > 650 && (
                      <CalendarTableCell align="center">
                        {formatCalendarDate(el.end.dateTime)}
                      </CalendarTableCell>
                    )}
                    <CalendarTableCell align="center">
                      {el.summary}
                    </CalendarTableCell>
                    <CalendarTableCell align="center">
                      <a href={el.htmlLink} target="_blank" rel="noreferrer">
                        <IconButton aria-label="link">
                          <CalendarLinkIcon />
                        </IconButton>
                      </a>
                    </CalendarTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CalendarTableContainer>
        )}
      </Wrapper>
    </ErrorBoundary>
  );
}

export default CalendarWidget;
