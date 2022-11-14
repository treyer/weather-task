import Timer from "components/Timer/Timer";
import CurrentDate from "components/CurrentDate/CurrentDate";
import Wrapper from "./components";

function Clock() {
  return (
    <Wrapper>
      <Timer />
      <CurrentDate />
    </Wrapper>
  );
}

export default Clock;
