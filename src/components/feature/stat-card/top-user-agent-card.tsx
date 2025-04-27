import { useTopUserAgent } from "@/api/hooks/logs-stat/use-top-user-agent";
import { ShieldUser } from "lucide-react";
import StatCard from "./stat-card";

const TopUserAgentCard = () => {
  const { isPending, data } = useTopUserAgent();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard
      title="Top User Agent"
      value={data?.agent || ""}
      icon={<ShieldUser />}
    />
  );
};

export default TopUserAgentCard;
