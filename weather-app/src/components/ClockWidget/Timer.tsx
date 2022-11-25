import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import { EN_US_LOCALE } from "constants/common";
import { DayTime, TimeWrapper } from "./components";

type Props = {
  timeZone: string;
};

function Timer({ timeZone }: Props) {
  const [time, setTime] = useState(new Date());
  const screenWidth = useWindowWidth();

  const [timeInDigits, dayTime] = time
    .toLocaleTimeString(EN_US_LOCALE, {
      timeZone,
      hour12: true,
    })
    .split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <TimeWrapper screenWidth={screenWidth}>
      {timeInDigits}
      <DayTime screenWidth={screenWidth}>{dayTime}</DayTime>
    </TimeWrapper>
  );
}

export default Timer;
