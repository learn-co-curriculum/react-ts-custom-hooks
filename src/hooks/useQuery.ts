import { useEffect, useState } from "react";
import { Post } from "../data/types";

// take in the url
function useQuery(url: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  // rename `posts` to a more generic `data`
  // expand typing to also accept a single Post and the null initial value
  const [data, setData] = useState<Post[] | Post | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);
  // the url is now a dependency
  // we want to use the side effect whenever the url changes

  // return an *object* with the data and isLoaded state
  return { data, isLoaded };
}

export default useQuery;
