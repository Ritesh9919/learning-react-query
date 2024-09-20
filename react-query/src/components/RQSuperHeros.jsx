import { Link } from "react-router-dom";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

function RQSuperHeros() {
  const onSuccess = (data) => {
    if (data) console.log("Perfom side effect after data fetchin", data);
  };
  const onError = (error) => {
    console.log("Perfom side effect after error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHerosData(onSuccess, onError);
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
          <Link to={`/rq-super-hero/${hero.id}`}>
            <h2>{hero.name}</h2>
          </Link>
        ))}
      </div>
      <button onClick={refetch}>Fetch Heros</button>
    </>
  );
}

export default RQSuperHeros;
