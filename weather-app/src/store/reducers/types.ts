export type AppState = {
  loading: boolean;
};

export type AppAction = {
  type: string;
};

export type GeoState = {
  city: string;
  countryName: string;
  timeZone: string;
};

export type GeoAction = {
  type: string;
  payload: GeoState;
};
