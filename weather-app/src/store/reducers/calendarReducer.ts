import {
  CLEAR_CALENDAR_EVENTS,
  SET_CALENDAR_EVENTS,
} from "store/actions/constants";
import { CalendarAction, CalendarState } from "../types";

const initialValue: CalendarState = {
  calendarEvents: [],
};

const calendarReducer = (
  state: CalendarState = initialValue,
  { type, payload = [] }: CalendarAction,
): CalendarState => {
  switch (type) {
    case SET_CALENDAR_EVENTS:
      return { ...state, calendarEvents: [...payload] };
    case CLEAR_CALENDAR_EVENTS:
      return { ...state, calendarEvents: [] };
    default:
      return state;
  }
};

export default calendarReducer;
