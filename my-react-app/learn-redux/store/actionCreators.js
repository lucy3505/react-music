// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   };
// }

import { ADD_NUMBER } from "./constants.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
