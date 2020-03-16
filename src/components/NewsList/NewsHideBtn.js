import React from "react";
import { NewsContext } from "./NewsContextProvider";

export default ({ id }) => {
  let { hideItem } = React.useContext(NewsContext);
  return (
    <span>
      [
      <button className="hide-btn" onClick={() => hideItem(id)}>
        hide
      </button>
      ]
    </span>
  );
};
