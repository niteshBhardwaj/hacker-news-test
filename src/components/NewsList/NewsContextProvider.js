import React from "react";
import NewsStorageService from "../../services/NewsStorageService";

export const NewsContext = React.createContext({});

export default props => {
  let [storage, saveStorage] = React.useState({
    upvoteList: NewsStorageService.upvoteList,
    hideList: NewsStorageService.hideList
  });

  const saveUpvotes = id => {
    storage.upvoteList[id] = true;
    NewsStorageService.saveUpvotes(storage.upvoteList);
    saveStorage({ ...storage });
  };

  const hideItem = id => {
    storage.hideList[id] = true;
    NewsStorageService.saveHideList(storage.hideList);
    saveStorage({ ...storage });
  };

  return (
    <NewsContext.Provider value={{ storage, saveUpvotes, hideItem }}>
      {props.children}
    </NewsContext.Provider>
  );
};
