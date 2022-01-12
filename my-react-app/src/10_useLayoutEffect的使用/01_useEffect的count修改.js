import React, { useState, useEffect } from "react";

export default function EffectCountDemo() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    //会有一个闪烁，因为要先设置0
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
