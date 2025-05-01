import { getBarChartData } from "@/api/function/logs-function";
import { DateOptionType, IBarChartResponse } from "@/interface";
import { useQuery } from "@tanstack/react-query";

interface Props {
  date_option: DateOptionType;
}
export const useBarChartData = ({ date_option }: Props) => {
  const { isPending, data, isError } = useQuery<IBarChartResponse, string>({
    queryKey: ["get-bar-chart-data", date_option],
    queryFn: async () => {
      return await getBarChartData({ dateOption: date_option });
    },
  });

  return { isPending, data, isError };
};
