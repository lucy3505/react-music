import React, { useRef, forwardRef } from "react";

const HYInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
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
