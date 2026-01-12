import { useGetUserByIdQuery } from "../features/users/usersApiSlice";
import useAuth from "./useAuth";

const useCurrentUser = () => {
  const { userId } = useAuth();
  return useGetUserByIdQuery(userId, {
    skip: !userId,
  });
};

export default useCurrentUser;
