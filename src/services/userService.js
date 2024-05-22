import { getData, postData } from "@/configs/fetch";

export const getInfoUser = async (userId, signal) => {
  const data = await getData(`/auth/info/${userId}`, signal);
  return data ? data : "";
};

export const createUser = async (data) => {
  if (!data) return;
  const dataUser = await postData(`/auth/create_user`, data);
  return dataUser ? dataUser : "";
};
