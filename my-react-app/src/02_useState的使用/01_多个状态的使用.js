import React, { useState } from "react";
import PropTypes from "prop-types";

function MultiHookState(props) {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(19);
  const [friends, setFriends] = useState(["lole", "kobe"]);

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>我的年龄：{age}</h2>
      <ul>
        {friends.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

MultiHookState.propTypes = {};

export default MultiHookState;
