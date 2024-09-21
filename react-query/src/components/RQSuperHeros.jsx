import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSuperHerosData,
  useAddSuperHeroData,
} from "../hooks/useSuperHerosData";

function RQSuperHeros() {
  const [name, setName] = useState("");
  const [alterAgo, setAlterAgo] = useState("");
  const onSuccess = (data) => {
    if (data) console.log("Perfom side effect after data fetchin", data);
  };
  const onError = (error) => {
    console.log("Perfom side effect after error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHerosData(onSuccess, onError);
  const { mutate } = useAddSuperHeroData();
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleSubmit = () => {
    const hero = { name, AlterAgo: alterAgo };
    mutate(hero);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="shadow-md"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="shadow-md"
          type="text"
          placeholder="AlterAgo"
          onChange={(e) => setAlterAgo(e.target.value)}
        />
        <button className="p-2 shadow-md rounded-md" type="submit">
          Add Hero
        </button>
      </form>
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
