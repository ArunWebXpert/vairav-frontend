import { getCommonResponseSize } from '@/api/function/logs-function';
import { QUERY_KEY } from '@/constants';
import { IResponseSizeResponse } from '@/interface';
import { useQuery } from '@tanstack/react-query';

export const useCommonResponseSize = () => {
  const { isPending, data, isError } = useQuery<IResponseSizeResponse, string>({
    queryKey: [QUERY_KEY.GET_COMMON_RESPONSE_SIZE],
    queryFn: async () => {
      return await getCommonResponseSize();
    },
  });

  return { isPending, data, isError };
};
