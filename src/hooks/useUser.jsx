import { createUser, getInfoUser } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUserQuery = (userId) => {
  return useQuery({
    queryKey: ["userLogin", userId],
    queryFn: ({ signal }) => getInfoUser(userId, signal),
  });
};

export const useCreateUser = (data) => {
  return useMutation({
    mutationKey: ["userCreate"],
    mutationFn: createUser(data),
  });
};
