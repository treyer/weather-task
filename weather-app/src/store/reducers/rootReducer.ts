import { combineReducers } from "redux";
import appReducer from "./appReducer";
import geoReducer from "./geoReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  app: appReducer,
  geo: geoReducer,
  weather: weatherReducer,
});

export default rootReducer;
