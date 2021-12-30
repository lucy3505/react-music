import { CHANGE_LOGIN_STATE } from "./constant";

const initState = { isLogin: false };

export default function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_STATE:
      return { ...state, isLogin: action.isLogin };
    default:
      return state;
  }
}
