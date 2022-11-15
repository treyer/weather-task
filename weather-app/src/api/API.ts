import axios from "axios";
// import { setupCache } from "axios-cache-adapter";
import {
  IP_WHO_URL,
  UNSPLASH_URL,
  UNSPLASH_URL_OPTIONS,
} from "constants/common";
import GetGeoResponse from "./types";

// const MAX_AGE = 15 * 60 * 1000;

// const cache = setupCache({
//   maxAge: MAX_AGE,
// });

// const api = axios.create({
//   adapter: cache.adapter,
// });

export const fetchImageSrc = async (keywords: string): Promise<string> => {
  const photoUrl = await axios
    .get(`${UNSPLASH_URL}${keywords}${UNSPLASH_URL_OPTIONS}`)
    .then((res) => res.data)
    .then((photo) => photo.urls.regular);
  return photoUrl;
};

export const fetchGeo = async (): Promise<GetGeoResponse> => {
  const geo = await axios.get(`${IP_WHO_URL}`).then((res) => res.data);
  return {
    city: geo.city,
    countryName: geo.country,
    timeZone: geo.timezone.id,
  };
};
