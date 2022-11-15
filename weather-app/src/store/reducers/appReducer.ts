import { HIDE_LOADER, SHOW_LOADER } from "./constants";
import { AppAction, AppState } from "./types";

const initialValue: AppState = { loading: false };

const appReducer = (
  state: AppState = initialValue,
  { type }: AppAction,
): AppState => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default appReducer;
