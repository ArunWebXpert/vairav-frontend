import { getTopHttpStatusCode } from "@/api/function/logs-function";
import { QUERY_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useCommonStatusCode = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: [QUERY_KEY.GET_COMMON_STATUS_CODE],
    queryFn: async () => {
      return await getTopHttpStatusCode();
    },
  });

  return { isPending, data, isError };
};
