import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

const useFetch = (url: string, options = {}) => {
   const { isPending, error, data } = useQuery({
      queryKey: ["resposta"],
      queryFn: () =>
         api.get("https://api.github.com/repos/TanStack/query")
            .then((res) => res.data),
   });

   return {
      data,
      error,
      isPending
   };
};

export { useFetch };
