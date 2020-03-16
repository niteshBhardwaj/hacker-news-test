import React from "react";
import { NewsContext } from "./NewsContextProvider";

const colors = ["#ff6600", "#220f0d"];

export default props => {
  let { id, points } = props;
  let { storage, saveUpvotes } = React.useContext(NewsContext);
  let isVoted = storage.upvoteList[id];
  let [color] = React.useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  return (
    <span className="unvote-cont">
      <span className="upvote-count" style={{ color }}>
        {points + (isVoted ? 1 : 0)}
      </span>
      <span className="upvote-arrow" onClick={() => saveUpvotes(id)}>
        {" "}
      </span>
    </span>
  );
};
