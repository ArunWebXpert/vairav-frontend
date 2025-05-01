import { getTableData } from "@/api/function/logs-function";
import { ILogTableDataResponse } from "@/interface";
import { useQuery } from "@tanstack/react-query";

export const useLogsTable = () => {
  const { isPending, isError, data, error } = useQuery<
    ILogTableDataResponse,
    string
  >({
    queryKey: ["get-table-data"],
    queryFn: async () => {
      return await getTableData({});
    },
  });

  return { isPending, isError, data, error };
};
