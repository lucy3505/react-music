import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));
