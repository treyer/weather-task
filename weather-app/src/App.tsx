import React from "react";

import MainLayout from "layouts/MainLayout/MainLayout";
import { UNSPLASH_URL, UNSPLASH_URL_OPTIONS } from "constants/common";

function App() {
  const url = `${UNSPLASH_URL}'city, rain'${UNSPLASH_URL_OPTIONS}`;

  return <MainLayout bgUrl={url} />;
}

export default App;
