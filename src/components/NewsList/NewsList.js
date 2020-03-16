import React from "react";
import NewsItem from "./NewsItem";
import NewsApi from "./NewsApi";

export default () => {
  let [page, setPage] = React.useState(0);
  return (
    <section className="new-list-cont">
      <NewsApi page={page}>
        {newsData => {
          let { data } = newsData;
          if (!data) return null;
          return (
            <>
              {data.hits.map(item => (
                <NewsItem key={item.created_at_i} item={item} />
              ))}
              <button
                className="more-result"
                onClick={() => setPage(page <= data.nbPages ? page + 1 : 0)}
              >
                More
              </button>
            </>
          );
        }}
      </NewsApi>
    </section>
  );
};
