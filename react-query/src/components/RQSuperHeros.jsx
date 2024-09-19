import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

function RQSuperHeros() {
  const { isLoading, data, isError, error } = useQuery(
    "super-heros",
    fetchSuperHeros
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data.data.map((hero) => (
        <p>{hero.name}</p>
      ))}
    </div>
  );
}

export default RQSuperHeros;
