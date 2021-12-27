import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
//获取composeEnhancers函数
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
//应用一些中间件
//1.引入thunkMidlleware中间件
//2.创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));
// const store = createStore(reducer, storeEnhancer);

sagaMiddleware.run(saga);

export default store;
