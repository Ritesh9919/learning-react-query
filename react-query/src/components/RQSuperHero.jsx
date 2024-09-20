import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperHero() {
  const { heroId } = useParams();
  const { isLoading, isError, error, data } = useSuperHeroData(heroId);
  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <p>Hello</p>
      <h1>{data?.data.name}</h1>
      <h2>{data?.data.AlterAgo}</h2>
    </div>
  );
}

export default RQSuperHero;
