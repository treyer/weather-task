import City from "components/City/City";
import ClockWidget from "components/ClockWidget/ClockWidget";
import Wrapper from "./components";

function InfoBlock() {
  return (
    <Wrapper>
      <ClockWidget />
      <City />
    </Wrapper>
  );
}

export default InfoBlock;
