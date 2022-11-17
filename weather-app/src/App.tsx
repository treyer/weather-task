import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MainLayout from "layouts/MainLayout/MainLayout";
import { FETCH_GEO } from "store/constants";
import { fetchWeatherbitForecast } from "api/API";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWeatherbitForecast("hourly", 20.34, 50.45);
    dispatch({ type: FETCH_GEO });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLayout />;
}

export default App;
