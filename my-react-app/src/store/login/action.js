import { CHANGE_LOGIN_STATE } from "./constant";

export const changeLogin = (isLogin) => ({
  type: CHANGE_LOGIN_STATE,
  isLogin,
});
