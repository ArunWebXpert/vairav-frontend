import { getTableData } from "@/api/function/logs-function";
import { useQuery } from "@tanstack/react-query";

export const useLogsTable = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["get-table-data"],
    queryFn: async () => {
      return await getTableData({});
    },
  });

  return { isPending, isError, data };
};
