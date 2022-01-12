import React, { useState, useReducer } from "react";
import reducer from "./reducer";

//useReducer仅仅能共享这个函数，不能共享数据
export default function Profile() {
  const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      {/* <h2>home当前计数：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button> */}
      <h2>profile当前计数：{state.count}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
