import store from "./store/index.js";
import { addAction } from "./store/actionCreators.js";
store.subscribe(() => {
  console.log(store.getState());
});

const action1 = { type: "ADD_NUMBER", num: 10 };

store.dispatch(addAction(10));
store.dispatch(addAction(14));
