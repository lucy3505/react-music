import React, { useEffect, useRef } from "react";

class TestCpn extends React.Component {
  render() {
    return <div>Test</div>;
  }
}

function TestCpn2(props) {
  return <div>test2</div>;
}

export default function RefHookDemo() {
  // useEffect(() => {
  //   //这种也可以，但一般不用
  //   document.getElementById("");
  // }, []);
  const testRef = useRef();
  const testRef2 = useRef();
  const titleRef = useRef();
  const inputRef = useRef();
  //ref如果放到一个组件上，拿到的就会是组件的实例,

  const changeDom = () => {
    titleRef.current.innerHTML = "hello world";
    inputRef.current.focus();
    console.log(testRef.current);
    console.log(testRef2.current); //组件如果不是class组件是拿不到实例对象的，需要用forwardRef包裹
  };

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef} />
      <TestCpn2 ref={testRef2} />

      <button onClick={(e) => changeDom()}>修改DOM</button>
    </div>
  );
}
