import React, { useEffect, useState } from "react";

export default function EffectHookConcelDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("订阅一些事件");
    return () => {
      console.log("取消事件");
    };
  }, []);

  return (
    <div>
      <h2>EffectHookConcelDemo</h2>
      <h2>{count}</h2>

      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
}
