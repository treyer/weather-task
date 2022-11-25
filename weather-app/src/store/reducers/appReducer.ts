import {
  // DECREASE_LOADING_COUNT,
  HIDE_LOADER,
  SET_BG_SEARCH_PHRASE,
  SET_IS_SIGNED_IN,
  SHOW_LOADER,
} from "../actions/constants";
import { AppAction, AppState } from "../types";

const initialValue: AppState = {
  loading: false,
  loadingCount: 0,
  isSignedIn: false,
  bgSearchPhrase: "weather forecast",
};

const appReducer = (
  state: AppState = initialValue,
  { type, payload }: AppAction,
): AppState => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true, loadingCount: state.loadingCount + 1 };
    case HIDE_LOADER:
      return {
        ...state,
        loading: state.loadingCount !== 1,
        loadingCount: state.loadingCount - 1,
      };
    // case DECREASE_LOADING_COUNT:
    //   return { ...state, loadingCount: state.loadingCount - 1 };
    case SET_IS_SIGNED_IN:
      return { ...state, isSignedIn: (payload as boolean) || false };
    case SET_BG_SEARCH_PHRASE:
      return {
        ...state,
        bgSearchPhrase: (payload as string) || "weather forecast pattern",
      };
    default:
      return state;
  }
};

export default appReducer;
