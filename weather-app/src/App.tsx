import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MainLayout from "layouts/MainLayout/MainLayout";
import { FETCH_GEO } from "store/reducers/constants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_GEO });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLayout />;
}

export default App;
