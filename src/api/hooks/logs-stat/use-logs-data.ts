import { getTableData } from '@/api/function/logs-function';
import { ILogTableDataResponse } from '@/interface/response/log-stat/log-table-data.interface';
import { useQuery } from '@tanstack/react-query';

export const useLogsTable = () => {
  const { isPending, isError, data } = useQuery<ILogTableDataResponse, string>({
    queryKey: ['get-table-data'],
    queryFn: async () => {
      return await getTableData({});
    },
  });

  return { isPending, isError, data };
};
