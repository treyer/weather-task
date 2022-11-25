import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

import { RootState } from "store";
import CurrentDate from "components/ClockWidget/CurrentDate";
import Timer from "components/ClockWidget/Timer";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Wrapper } from "./components";

function Clock() {
  const { timeZone } = useSelector((state: RootState) => state.geo);
  const screenWidth = useWindowWidth();

  if (timeZone === "UTC") return null;

  return (
    <ErrorBoundary>
      <Wrapper screenWidth={screenWidth}>
        <Timer timeZone={timeZone} />
        <CurrentDate timeZone={timeZone} />
      </Wrapper>
    </ErrorBoundary>
  );
}

export default Clock;
