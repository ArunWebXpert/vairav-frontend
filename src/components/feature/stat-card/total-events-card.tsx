import { useTotalEvents } from "@/api/hooks/logs-stat/use-total-events";
import StatCard from "./stat-card";
import { Activity } from "lucide-react";

const TotalEventsCard = () => {
  const { isPending, data } = useTotalEvents();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard
      title="Total Events"
      value={new Intl.NumberFormat().format(data?.totalEvents || 0)}
      icon={<Activity />}
    />
  );
};

export default TotalEventsCard;
