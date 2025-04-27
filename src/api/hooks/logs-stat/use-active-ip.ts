import { getMostActiveIp } from "@/api/function/logs-function";
import { QUERY_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useActiveIp = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: [QUERY_KEY.GET_ACTIVE_IP],
    queryFn: async () => {
      return await getMostActiveIp();
    },
  });

  return { isPending, data, isError };
};
