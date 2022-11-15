import { SET_GEO } from "./constants";
import { GeoAction, GeoState } from "./types";

const initialValue: GeoState = { city: "", countryName: "", timeZone: "UTC" };

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
