import React from "react";
import Upvote from "./Upvote";
import NewsLink from "./NewsLink";
import NewsHideBtn from "./NewsHideBtn";
import NewsPostedTime from "./NewsPostedTime";
import { NewsContext } from "./NewsContextProvider";

export default props => {
  let { item } = props;
  let { created_at_i: id } = item;
  let { storage } = React.useContext(NewsContext);
  let hide = storage.hideList[id];
  if (hide) return null;
  return (
    <div className="list-item">
      <span className="no-comments"> {item.num_comments} </span>
      <Upvote points={item.points} id={id} />
      <div className="list-right">
        <p className="list-title"> {item.title} </p>
        <NewsLink link={item.url} />
        <span>
          <span> by </span>
          <span className="user-name"> {item.author} </span>
        </span>
        <NewsPostedTime time={item.created_at} />
        <NewsHideBtn id={id} />
      </div>
    </div>
  );
};
