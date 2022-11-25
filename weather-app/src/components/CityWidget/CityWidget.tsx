import { SetStateAction, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePlacesWidget } from "react-google-autocomplete";
import { useWindowWidth } from "@react-hook/window-size";
import TextField from "@mui/material/TextField";

import { RootState } from "store";
import { selectLocation } from "store/selectors/selectors";
import { handleDataFromAutocomplete } from "store/actions";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Wrapper from "./components";

export type AutocompleteData = {
  location: string;
  latitude: number;
  longitude: number;
};

function CityWidget() {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => selectLocation(state));
  const [inputValue, setInputValue] = useState("");
  const screenWidth = useWindowWidth();

  useEffect(() => {
    setInputValue(location);
  }, [location]);

  const { ref: materialRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    onPlaceSelected: (place) => {
      dispatch(
        handleDataFromAutocomplete({
          location: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
        }),
      );
    },
    options: {
      fields: ["utc_offset_minutes", "geometry.location", "formatted_address"],
    },
    language: "en-US",
  });

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  return (
    <ErrorBoundary>
      <Wrapper screenWidth={screenWidth}>
        <TextField
          sx={{ input: { color: "white" }, label: { color: "white" } }}
          id="filled-basic"
          label="Location"
          variant="filled"
          inputRef={materialRef}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Wrapper>
    </ErrorBoundary>
  );
}

export default CityWidget;
