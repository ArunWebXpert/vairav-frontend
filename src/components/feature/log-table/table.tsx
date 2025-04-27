import { useLogsTable } from "@/api/hooks/logs-stat/use-logs-data";

const LogTable = () => {
  useLogsTable();
  return <div>LogTable</div>;
};

export default LogTable;
