import axios from "axios";
import { setupCache, buildWebStorage } from "axios-cache-interceptor";

import type { AxiosStatic } from "axios";
import type { AxiosCacheInstance } from "axios-cache-interceptor";

const storage = buildWebStorage(localStorage, "http-");

setupCache(axios, {
  storage,
});

export default axios as AxiosCacheInstance & AxiosStatic;
