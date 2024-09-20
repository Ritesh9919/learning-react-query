import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQuery() {
  const { data: superHeros } = useQuery("super-heros", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQuery</div>;
}

export default ParallelQuery;
