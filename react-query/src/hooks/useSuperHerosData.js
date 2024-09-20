import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

export function useSuperHerosData(onSuccess, onError) {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess,
    onError,
    select: (data) => {
      const heroName = data.data.map((hero) => hero.name);
      return heroName;
    },
  });
}
