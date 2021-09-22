import React, { useEffect, useState } from "react";

function useContentful(contentType, query) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
          },
          body: JSON.stringify({ query })
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.log(errors);
          return;
        }
        setData(data[contentType + "Collection"].items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contentType, query]);
  return { data, loading };
}

export default useContentful;
