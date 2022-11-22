import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { RootState } from "store";
import { selectCalendarEvents } from "store/selectors/selectors";
import { CalendarEvent } from "store/types";
import { Wrapper, CalendarTableContainer } from "./components";

function CalendarBlock() {
  const calendarEvents = useSelector((store: RootState) =>
    selectCalendarEvents(store),
  );

  return (
    <Wrapper>
      <CalendarTableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Start</TableCell>
              <TableCell align="right">End</TableCell>
              <TableCell align="right">Event</TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calendarEvents.map((el: CalendarEvent) => (
              <TableRow
                key={el.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {el.start.dateTime}
                </TableCell>
                <TableCell align="right">{el.end.dateTime}</TableCell>
                <TableCell align="right">{el.summary}</TableCell>
                <TableCell align="right">
                  <a href={el.htmlLink}>Link</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CalendarTableContainer>
    </Wrapper>
  );
}

export default CalendarBlock;
