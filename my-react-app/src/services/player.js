import request from "./axios";

export const getSongDetail = (ids) => {
  return request({ url: "/song/detail", params: { ids } });
};
