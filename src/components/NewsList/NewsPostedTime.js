import React from "react";
import humanDate from "human-date";

export default ({ time }) => {
  return <span className="posted-time">{humanDate.relativeTime(time)}</span>;
};
