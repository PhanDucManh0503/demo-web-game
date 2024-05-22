import { baseUrl as BaseUrl } from "./env";
import { getStorage } from "@/utils/localStorage";
import { ACCESS_TOKEN } from "@/constant";
import apiInstance from "@/constant/ApiInstance";

const axios = () => {
  const api = apiInstance({
    baseUrl: BaseUrl,
    headers: {
      Authorization: "Bearer " + getStorage(ACCESS_TOKEN),
    },
  });

  return api;
};

export const postData = async (prefix, data) => {
  const dataPost = await axios().post(prefix, data);
  if (!dataPost) return;
  return dataPost.data;
};

export const getData = async (prefix, signal) => {
  const dataGet = await axios().get(prefix, { signal });
  return dataGet.data;
};

export const putData = async (prefix, data) => {
  const dataPut = await axios().put(prefix, data);
  return dataPut.data;
};

export const deleteData = async (prefix) => {
  const dataDel = await axios().delete(prefix);
  return dataDel.data;
};
