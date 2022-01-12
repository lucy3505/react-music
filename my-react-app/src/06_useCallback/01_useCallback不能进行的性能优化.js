import React, { useState, useCallback } from "react";

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    //有函数创建过程
    console.log("执行increment1函数");
    setCount(count + 1); //更新后这个函数是会重新定义一遍
  };

  const increment2 = useCallback(() => {
    //有函数创建过程，这里是个闭包，保存了count
    console.log("执行increment2函数");
    setCount(count + 1); //更新后这个函数是会重新定义一遍
  }, [count]);

  return (
    <div>
      <h2>CallbackHookDemo01:{count}</h2>
      <button onClick={(e) => increment1()}>+1</button>
      <button onClick={(e) => increment2()}>+1</button>
    </div>
  );
}
