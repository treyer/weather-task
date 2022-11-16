import { useSelector } from "react-redux";
import { RootState } from "store";

import { City, CountryName, Wrapper } from "./components";

function CityWidget() {
  const { city, countryName } = useSelector((state: RootState) => state.geo);

  return (
    <Wrapper>
      <CountryName>{countryName}</CountryName>
      <City>{city}</City>
    </Wrapper>
  );
}

export default CityWidget;
