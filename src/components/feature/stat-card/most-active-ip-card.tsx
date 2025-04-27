import { useActiveIp } from "@/api/hooks/logs-stat/use-active-ip";
import { Cpu } from "lucide-react";
import StatCard from "./stat-card";

const MostActiveIpCard = () => {
  const { isPending, data } = useActiveIp();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard title="Most Active IP" value={data?.ip || ""} icon={<Cpu />} />
  );
};

export default MostActiveIpCard;
