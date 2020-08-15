import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
  const date = useCurrentDate()

  return <StyledClock>Dzisiaj jest {formatDate(date)}</StyledClock>;
};

export default Clock;
