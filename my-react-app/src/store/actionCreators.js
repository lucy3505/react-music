// import {
//   ADD_NUM,
//   SUB_NUM,
//   CHANGE_BANNER,
//   CHANGE_RECOMMEND,
//   FETCH_HOME_MULTIDATA,
// } from "./constant";
// import axios from "axios";

// export const addNum = (num) => ({ type: ADD_NUM, payload: { num } });

// export const subNum = (num) => {
//   return { type: SUB_NUM, payload: { num } };
// };

// export const changeBannerAction = (data) => {
//   // axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
//   //   console.log(res);
//   //   const data = res.data.data;
//   //   console.log("轮播图:", data.banner.list);
//   //   console.log("推荐:", data.recommend.list);
//   //   return { type: CHANGE_BANNER, payload: data };
//   // });
//   return { type: CHANGE_BANNER, payload: data };
// };

// export const changerRecommendAction = (data) => {
//   return { type: CHANGE_RECOMMEND, payload: data };
// };
// // redux-thunk中定义的action函数
// export const getHomeMultidata = (dispatch, getState) => {
//   axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
//     console.log(res);
//     const data = res.data.data;
//     dispatch(changeBannerAction(data.banner.list));
//   });
// };

// //redux-saga拦截的action
// export const fetchHomeMultidataAction = { type: FETCH_HOME_MULTIDATA };
