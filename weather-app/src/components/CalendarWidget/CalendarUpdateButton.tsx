import { useDispatch } from "react-redux";
import { fetchCalendarEvents } from "store/actions";
import { CalendarIconButton, CalendarUpdateIcon } from "./components";

function CalendarUpdateButton() {
  const dispatch = useDispatch();

  const handleUpdateCalendar = () => {
    dispatch(fetchCalendarEvents());
  };

  return (
    <CalendarIconButton onClick={handleUpdateCalendar}>
      <CalendarUpdateIcon />
    </CalendarIconButton>
  );
}

export default CalendarUpdateButton;
