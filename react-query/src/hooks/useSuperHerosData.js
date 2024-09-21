import { useQuery, useMutation } from "react-query";
import axios from "axios";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superHeros");
};

export function useSuperHerosData(onSuccess, onError) {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess,
    onError,
  });
}

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superHeros", hero);
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
