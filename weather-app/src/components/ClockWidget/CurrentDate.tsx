import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import { formatToCurrentDate } from "helpers/formatter";
import { DateWrapper } from "./components";

type Props = {
  timeZone: string;
};

function CurrentDate({ timeZone }: Props) {
  const [formattedDate, setFormattedDate] = useState(() =>
    formatToCurrentDate(new Date(), timeZone),
  );
  const screenWidth = useWindowWidth();

  useEffect(() => {
    const timer = setTimeout(() => {
      const newFormattedDate = formatToCurrentDate(new Date(), timeZone);
      if (newFormattedDate !== formattedDate) {
        setFormattedDate(newFormattedDate);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  return <DateWrapper screenWidth={screenWidth}>{formattedDate}</DateWrapper>;
}

export default CurrentDate;
