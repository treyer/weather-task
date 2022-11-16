import CityWidget from "components/CityWidget/CityWidget";
import ClockWidget from "components/ClockWidget/ClockWidget";
import Wrapper from "./components";

function InfoBlock() {
  return (
    <Wrapper>
      <ClockWidget />
      <CityWidget />
    </Wrapper>
  );
}

export default InfoBlock;
