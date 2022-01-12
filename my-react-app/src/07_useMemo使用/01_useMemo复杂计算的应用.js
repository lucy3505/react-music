import React, { useState, useMemo } from "react";

function calcNumber(count) {
  console.log("calcNumber重新计算");
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  return total;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      {/* show切换了整个函数也会重新渲染，total也会重新计算，没必要 */}
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
