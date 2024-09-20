import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

function RQSuperHeros() {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    { enabled: false }
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
