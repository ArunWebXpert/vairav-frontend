import { useCommonStatusCode } from "@/api/hooks/logs-stat/use-common-status-code";
import { Code } from "lucide-react";
import StatCard from "./stat-card";

const TopHttpStatusCodeCard = () => {
  const { isPending, data } = useCommonStatusCode();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard
      title="Top Http Status Code"
      value={String(data?.statusCode || 0)}
      icon={<Code />}
    />
  );
};

export default TopHttpStatusCodeCard;
