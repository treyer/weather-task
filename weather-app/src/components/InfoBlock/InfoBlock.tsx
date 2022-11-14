import City from "components/City/City";
import Clock from "components/Clock/Clock";
import Wrapper from "./components";

function InfoBlock() {
  return (
    <Wrapper>
      <Clock />
      <City />
    </Wrapper>
  );
}

export default InfoBlock;
