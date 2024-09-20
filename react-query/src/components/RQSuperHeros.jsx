import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

function RQSuperHeros() {
  const [isPolling, setIsPolling] = useState(2000);
  const onSuccess = (data) => {
    if (data.data.length == 15) {
      setIsPolling(false);
    }
    if (data) console.log("Perfom side effect after data fetchin", data);
  };
  const onError = (error) => {
    console.log("Perfom side effect after error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      onSuccess,
      onError,
      refetchInterval: isPolling,
      refetchIntervalInBackground: true,
    }
  );

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.data.map((hero) => (
          <p>{hero.name}</p>
        ))}
      </div>
      <button onClick={refetch}>Fetch Heros</button>
    </>
  );
}

export default RQSuperHeros;
