import React, { useRef, forwardRef, useImperativeHandle } from "react";

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  //使用了useImperativeHandle以后，传进来的ref就会绑到这个函数里的ref，也就是下面的ref，而不会绑到input里的ref,到时候返回的就是useImperativeHandle返回的对象，父组件也只能通过ref拿到这个对象，而不能直接对Input进行操作了，这里对Input的操作是在自己组件里创建一个useRef
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        console.log("useImperative中的focus");
        inputRef.current.focus();
      },
    }),
    [inputRef.current]
  );
  return <input type="text" ref={inputRef} />;
});

export default function ForwardRefDemo() {
  const inputRef = useRef();
  return (
    <div>
      <HYInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
