import { getMostCommonMethod } from '@/api/function/logs-function';
import { QUERY_KEY } from '@/constants';
import { ICommonMethodResponse } from '@/interface';
import { useQuery } from '@tanstack/react-query';

export const useCommonMethod = () => {
  const { isPending, data, isError } = useQuery<ICommonMethodResponse, string>({
    queryKey: [QUERY_KEY.GET_COMMON_METHOD],
    queryFn: async () => {
      return await getMostCommonMethod();
    },
  });

  return { isPending, data, isError };
};
