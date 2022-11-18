import { SET_GEO } from "../actions/constants";
import { GeoAction, GeoState } from "../types";

const initialValue: GeoState = {
  city: "",
  countryName: "",
  timeZone: "UTC",
  latitude: null,
  longitude: null,
};

const geoReducer = (
  state: GeoState = initialValue,
  { type, payload }: GeoAction,
): GeoState => {
  switch (type) {
    case SET_GEO:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default geoReducer;
