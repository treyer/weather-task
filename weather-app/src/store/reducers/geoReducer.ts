import { SET_GEO } from "../actions/constants";
import { GeoAction, GeoState } from "../types";

const geo = localStorage.getItem("geo");
let geoParsed: GeoState | null = null;
if (geo) {
  geoParsed = JSON.parse(geo);
}

const initialValue: GeoState = {
  location: geoParsed?.location || "",
  timeZone: geoParsed?.timeZone || "UTC",
  latitude: geoParsed?.latitude || null,
  longitude: geoParsed?.longitude || null,
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
