import request from "./axios";

export const getTopBanner = () => {
  return request({ url: "/banner" });
};

export const getHotRecommend = (limit) => {
  return request({ url: "/personalized", params: { limit } });
};
