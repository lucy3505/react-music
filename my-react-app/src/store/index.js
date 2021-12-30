import reducer from "./reducer";
import { createStore, compose } from "redux";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers());

export default store;
