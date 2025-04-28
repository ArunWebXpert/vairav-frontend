import { getBarChartData } from '@/api/function/logs-function';
import { IBarChartResponse } from '@/interface';
import { useQuery } from '@tanstack/react-query';

export const useBarChartData = () => {
  const { isPending, data, isError } = useQuery<IBarChartResponse, string>({
    queryKey: ['get-bar-chart-data'],
    queryFn: async () => {
      return await getBarChartData({ dateOption: 'day' });
    },
  });

  return { isPending, data, isError };
};
