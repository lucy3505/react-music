import React, { useState, useEffect } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    //默认组件渲染完成后会执行这个函数，不管是第一次还是发生更新后渲染
    document.title = counter;
  });

  return (
    <div>
      <h2>当前数字：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
