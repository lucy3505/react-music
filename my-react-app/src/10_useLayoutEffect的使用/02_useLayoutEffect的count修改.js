import React, { useState, useLayoutEffect } from "react";

export default function UseLayoutEffectCountDemo() {
  const [count, setCount] = useState(10);

  useLayoutEffect(() => {
    //没有闪烁，因为这里是在渲染0之前会来触发这个函数
    //用得少
    if (count === 0) {
      setCount(Math.random());
    }
  }, [count]);

  return (
    <div>
      <h2>数字：{count}</h2>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
