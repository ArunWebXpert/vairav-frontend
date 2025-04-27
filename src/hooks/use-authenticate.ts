import { useAppSelector } from "@/store/hooks";

export const useAuthenticate = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  console.log({ isAuthenticated });

  return isAuthenticated;
};
