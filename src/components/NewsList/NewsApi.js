import React from "react";

const options = {
  method: "GET"
};

const intialState = () => ({
  loading: false,
  data: null,
  error: false
});

export default props => {
  let [newsData, setData] = React.useState(intialState());
  let { page, children } = props;
  React.useEffect(() => {
    setData({ ...newsData, loading: true, error: false });
    async function fetchData() {
      try {
        let response = await fetch(
          `https://hn.algolia.com/api/v1/search?&tags=story&page=${page}`,
          options
        );
        console.log(response)
        let data = await response.json();
        setData({ ...newsData, data, loading: false });
      } catch (e) {
        console.log(e);
        setData({ data: null, loading: false, error: true });
      }
    }
    fetchData();
  }, [page]);

  return children(newsData);
};
