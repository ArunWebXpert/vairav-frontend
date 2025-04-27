import { useCommonResponseSize } from "@/api/hooks/logs-stat/use-common-response-size";
import { MessageSquareReply } from "lucide-react";
import StatCard from "./stat-card";

const CommonResponseSizeCard = () => {
  const { isPending, data } = useCommonResponseSize();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard
      title="Common Response Size"
      value={`${data?.bytes || 0} bytes`}
      icon={<MessageSquareReply />}
    />
  );
};

export default CommonResponseSizeCard;
