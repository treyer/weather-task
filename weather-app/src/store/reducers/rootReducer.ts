import { combineReducers } from "redux";
import appReducer from "./appReducer";
import calendarReducer from "./calendarReducer";
import geoReducer from "./geoReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  app: appReducer,
  geo: geoReducer,
  weather: weatherReducer,
  calendar: calendarReducer,
});

export default rootReducer;
