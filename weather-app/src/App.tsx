import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import MainLayout from "layouts/MainLayout/MainLayout";
import { RootState } from "store";
import {
  fetchGeo,
  fetchOpenweathermap,
  fetchWeatherbitDaily,
  fetchWeatherbitHourly,
} from "store/actions";
import theme from "theme";

function App() {
  const { location, timeZone, latitude, longitude } = useSelector(
    (state: RootState) => state.geo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "" || timeZone === "UTC" || !latitude || !longitude) {
      dispatch(fetchGeo());
    } else {
      dispatch(fetchOpenweathermap());
      dispatch(fetchWeatherbitDaily());
      dispatch(fetchWeatherbitHourly());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
