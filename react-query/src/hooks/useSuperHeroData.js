import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  console.log(heroId);
  return axios.get(`http://localhost:4000/superHeros/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero);
};
