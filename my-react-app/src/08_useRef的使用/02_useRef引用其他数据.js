import React, { useRef, useState, useEffect } from "react";

export default function UseRefDemo02() {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
  }, [count]);
  return (
    <div>
      <h2>count上一次的值:{numRef.current}</h2>
      <h2>count这一次的值:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
}
