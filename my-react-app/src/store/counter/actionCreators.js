import { ADD_NUM, SUB_NUM } from "./constants";

export const addNum = (num) => ({ type: ADD_NUM, payload: { num } });

export const subNum = (num) => {
  return { type: SUB_NUM, payload: { num } };
};
