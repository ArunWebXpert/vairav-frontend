import { getTopAgent } from '@/api/function/logs-function';
import { QUERY_KEY } from '@/constants';
import { ITopAgentResponse } from '@/interface';
import { useQuery } from '@tanstack/react-query';

export const useTopUserAgent = () => {
  const { isPending, data, isError } = useQuery<ITopAgentResponse, string>({
    queryKey: [QUERY_KEY.GET_TOP_USER_AGENT],
    queryFn: async () => {
      return await getTopAgent();
    },
  });

  return { isPending, data, isError };
};
