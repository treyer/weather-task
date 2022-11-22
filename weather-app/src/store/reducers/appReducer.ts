import {
  HIDE_LOADER,
  SET_IS_SIGNED_IN,
  SHOW_LOADER,
} from "../actions/constants";
import { AppAction, AppState } from "../types";

const initialValue: AppState = { loading: false, isSignedIn: false };

const appReducer = (
  state: AppState = initialValue,
  { type, payload }: AppAction,
): AppState => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SET_IS_SIGNED_IN:
      return { ...state, isSignedIn: payload || false };
    default:
      return state;
  }
};

export default appReducer;
