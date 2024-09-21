import { useQuery, useMutation, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      queryClient.setQueryData("super-heros", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, ...data.data],
        };
      });
    },
  });
};
