import store from "./store/index.js";
import { addAction } from "./store/actionCreators.js";
// store.subscribe(() => {
//   console.log(store.getState());
// });

//1.要在dispatch前后打印state
// console.log("dispatch前---dispatching action:", store.getState());
// store.dispatch(addAction(10));
// console.log("dispatch后---dispatching action:", store.getState());
// console.log("dispatch前---dispatching action:", store.getState());
// store.dispatch(addAction(14));
// console.log("dispatch后---dispatching action:", store.getState());

//2.
// function logState(action) {
//   console.log("dispatch前---dispatching action:", store.getState());
//   store.dispatch(action);
//   console.log("dispatch后---dispatching action:", store.getState());
// }

// logState(addAction(10));
// logState(addAction(14));

//3 用户更喜欢用store.dispatch
// const next = store.dispatch;
// function logState(action) {
//   console.log("dispatch前---dispatching action:", store.getState());
//   next(action);
//   console.log("dispatch后---dispatching action:", store.getState());
// }

// store.dispatch = logState;
// store.dispatch(addAction(10));
// store.dispatch(addAction(14));

//4封装
function patchLogging(store) {
  const next = store.dispatch;
  function logState(action) {
    console.log("dispatch前---dispatching action:", store.getState());
    next(action);
    console.log("dispatch后---dispatching action:", store.getState());
  }

  // store.dispatch = logState;  使得这个函数变成纯函数
  return logState;
}
patchLogging(store);
store.dispatch(addAction(10));
store.dispatch(addAction(14));

// 封装patchThunk功能;
function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  // store.dispatch = dispatchAndThunk;
  return dispatchAndThunk;
}

patchThunk(store);

// function foo(dispatch, getState) {
//   console.log(dispatch, getState);
//   dispatch(addAction(10));
// }
// store.dispatch(foo);

//5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
  // const newMiddleware=[...middlewares];
  middlewares.forEach((middleware) => (store.dispatch = middleware(store)));
}

applyMiddlewares(patchLogging, patchThunk);
store.dispatch(addAction(10));
store.dispatch(addAction(14));
