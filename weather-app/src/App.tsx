import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import MainLayout from "layouts/MainLayout/MainLayout";
import { RootState } from "store";
import { fetchGeo } from "store/actions";
import theme from "theme";

function App() {
  const { location } = useSelector((state: RootState) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "") {
      dispatch(fetchGeo());
    }
  }, [dispatch, location]);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
