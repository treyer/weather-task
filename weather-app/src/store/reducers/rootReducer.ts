import { combineReducers } from "redux";
import appReducer from "./appReducer";
import geoReducer from "./geoReducer";

const rootReducer = combineReducers({
  app: appReducer,
  geo: geoReducer,
});

export default rootReducer;
