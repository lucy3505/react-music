import request from "./axios";

export const getTopBanner = () => {
  return request({ url: "/banner" });
};

export const getHotRecommend = (limit) => {
  return request({ url: "/personalized", params: { limit } });
};

export const getNewAlbum = (limit) => {
  return request({ url: "/album/list", params: { limit } });
};

export const getAllTopLists = () => {
  return request({ url: "/toplist" });
};

export const getTopListById = (id) => {
  return request({ url: "/top/list", params: { id } });
};
