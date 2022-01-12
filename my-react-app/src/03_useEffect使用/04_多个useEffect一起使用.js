import React, { useEffect, useState } from "react";

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log("修改dom ", count);
  }, [count]);
  useEffect(() => {
    console.log("订阅事件");
  }, []);
  useEffect(() => {
    console.log("网络请求");
  }, []);

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>{count}</h2>

      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <h2>{isLogin ? "coderwhy" : "未登录"}</h2>
      <button onClick={(e) => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
