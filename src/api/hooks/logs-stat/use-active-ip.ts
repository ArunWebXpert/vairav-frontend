import { getMostActiveIp } from '@/api/function/logs-function';
import { QUERY_KEY } from '@/constants';
import { IActiveIpResponse } from '@/interface';
import { useQuery } from '@tanstack/react-query';

export const useActiveIp = () => {
  const { isPending, data, isError } = useQuery<IActiveIpResponse, string>({
    queryKey: [QUERY_KEY.GET_ACTIVE_IP],
    queryFn: async () => {
      return await getMostActiveIp();
    },
  });

  return { isPending, data, isError };
};
