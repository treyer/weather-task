import { useEffect, useState } from "react";

import formatToCurrentDate from "helpers/dateFormat";
import { DateWrapper } from "./components";

type Props = {
  timeZone: string;
};

function CurrentDate({ timeZone }: Props) {
  const [formattedDate, setFormattedDate] = useState(() =>
    formatToCurrentDate(new Date(), timeZone),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const newFormattedDate = formatToCurrentDate(new Date(), timeZone);
      if (newFormattedDate !== formattedDate) {
        setFormattedDate(newFormattedDate);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  return <DateWrapper>{formattedDate}</DateWrapper>;
}

export default CurrentDate;
