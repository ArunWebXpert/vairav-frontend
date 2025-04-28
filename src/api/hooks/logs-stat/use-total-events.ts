import { QUERY_KEY } from '@/constants';
import { getTotalEvents } from '@/api/function/logs-function';
import { useQuery } from '@tanstack/react-query';
import { ITotalEventsResponse } from '@/interface';

export const useTotalEvents = () => {
  const { isPending, data, isError } = useQuery<ITotalEventsResponse, string>({
    queryKey: [QUERY_KEY.GET_TOTAL_EVENTS],
    queryFn: async () => {
      return await getTotalEvents();
    },
  });

  return { isPending, data, isError };
};
