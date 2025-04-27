import { QUERY_KEY } from "@/constants";
import { getTotalEvents } from "@/api/function/logs-function";
import { useQuery } from "@tanstack/react-query";

export const useTotalEvents = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: [QUERY_KEY.GET_TOTAL_EVENTS],
    queryFn: async () => {
      return await getTotalEvents();
    },
  });

  return { isPending, data, isError };
};
