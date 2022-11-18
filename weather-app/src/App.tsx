import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "layouts/MainLayout/MainLayout";
import { FETCH_GEO } from "store/constants";
import { RootState } from "store";

function App() {
  const { city } = useSelector((state: RootState) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city === "") {
      dispatch({ type: FETCH_GEO });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLayout />;
}

export default App;
