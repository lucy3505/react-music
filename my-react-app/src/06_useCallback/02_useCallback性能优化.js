import React, { useState, useCallback, memo, useMemo } from "react";

/**
 * useCallback在什么时候使用？
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时,使用useCallback对函数进行处理
 *        要配合memo
 *
 */

const HYButton = memo((props) => {
  console.log("hybutton 重新渲染：" + props.title);
  return <button onClick={props.increment}>+1</button>;
});

export default function CallbackHookDemo01() {
  console.log("callbackHookDemo2重新渲染");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);

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

  const increment3 = useMemo(() => {
    //useMemo代替useCallback
    return () => {
      console.log("执行increment2函数");
      setCount(count + 1); //更新后这个函数是会重新定义一遍
    };
  }, [count]);

  return (
    <div>
      <h2>CallbackHookDemo01:{count}</h2>
      {/* <button onClick={(e) => increment1()}>+1</button>
      <button onClick={(e) => increment2()}>+1</button> */}
      <HYButton increment={increment1} title="btn1" />
      <HYButton increment={increment2} title="btn2" />
      <button onClick={(e) => setShow(!show)}>重新渲染</button>
    </div>
  );
}
