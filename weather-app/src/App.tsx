import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "layouts/MainLayout/MainLayout";
import { RootState } from "store";
import { fetchGeo } from "store/actions";

function App() {
  const { city } = useSelector((state: RootState) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city === "") {
      dispatch(fetchGeo());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLayout />;
}

export default App;
