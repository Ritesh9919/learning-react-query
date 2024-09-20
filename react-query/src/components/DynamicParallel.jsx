import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superHeros/${heroId}`);
};

function DynamicParallel({ heroId }) {
  const queryResults = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeros(id),
      };
    })
  );
  console.log(queryResults);
  return <div>DynamicParallel</div>;
}

export default DynamicParallel;
