import { LoginReducer } from "./login";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginInfo: LoginReducer,
});
export default reducer;
