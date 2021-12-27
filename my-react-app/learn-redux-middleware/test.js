console.log("index.js被执行");
//导入redux
const redux = require("redux");

const initialState = "";

//reducer
function reducer(state = initialState, action) {
  // switch (action.type) {
  //   case "INCREMENT":
  //     return { ...state, counter: state.counter + 11 };
  //   case "DECREMENT":
  //     return { ...state, counter: state.counter - 11 };
  //   case "ADD_NUMBER":
  //     return { ...state, counter: state.counter + action.num };
  //   case "SUB_NUMBER":
  //     // return { ...state, counter: state.counter - action.num };
  //     console.log("111");
  //     return;
  //   default:
  //     return state;
  // }
  return action.num;
}

//store (创建的时候需要传入一个reducer)
const store = redux.createStore(reducer);

//订阅store的修改
store.subscribe(() => {
  console.log("state发生了改变");
  console.log("counter:", store.getState());
});

//action
const actions1 = { type: "INCREMENT" };
const actions2 = { type: "DECREMENT" };
const actions3 = { type: "ADD_NUMBER", num: 7 };
const actions4 = { type: "SUB_NUMBER", num: 2 };
// const actions1={type:"INCREMENT"}

store.dispatch({ type: "AA", num: 1 });
// store.dispatch(actions2);
// store.dispatch(actions2);
// store.dispatch(actions3);
// store.dispatch(actions4);
