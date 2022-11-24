import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "layouts/MainLayout/MainLayout";
import { RootState } from "store";
import { fetchGeo } from "store/actions";

function App() {
  const { location } = useSelector((state: RootState) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "") {
      dispatch(fetchGeo());
    }
  }, [dispatch, location]);

  return <MainLayout />;
}

export default App;
