import React, { useState, useMemo, memo } from "react";

const HYInfo = memo((props) => {
  console.log("HYInfo 重新渲染");
  return (
    <h2>
      名字:{props.info.name} 年龄：{props.info.age}
    </h2>
  );
});

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02 重新渲染");
  const [show, setShow] = useState(true);

  const info = useMemo(() => {
    return { name: "hy", age: 18 };
  }, []);
  // const info =  { name: "hy", age: 18 }
  return (
    <div>
      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
