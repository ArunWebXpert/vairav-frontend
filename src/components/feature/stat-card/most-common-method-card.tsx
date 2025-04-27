import { useCommonMethod } from "@/api/hooks/logs-stat/user-common-method";
import { GitPullRequest } from "lucide-react";
import StatCard from "./stat-card";

const MostCommonMethodCard = () => {
  const { isPending, data } = useCommonMethod();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <StatCard
      title="Most Common Method"
      value={data?.method || ""}
      icon={<GitPullRequest />}
    />
  );
};

export default MostCommonMethodCard;
