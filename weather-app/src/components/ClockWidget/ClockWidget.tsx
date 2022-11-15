import CurrentDate from "components/ClockWidget/CurrentDate";
import Timer from "components/ClockWidget/Timer";
import { Wrapper } from "./components";

function Clock() {
  const timeZone = "UTC";

  return (
    <Wrapper>
      <Timer timeZone={timeZone} />
      <CurrentDate timeZone={timeZone} />
    </Wrapper>
  );
}

export default Clock;
