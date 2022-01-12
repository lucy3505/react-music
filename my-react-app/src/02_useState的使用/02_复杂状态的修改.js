import React, { useState } from "react";
import PropTypes from "prop-types";

function MultiHookState(props) {
  const [friends, setFriends] = useState(["lole", "kobe"]);

  const [students, setStudents] = useState([
    { name: "a", age: 1 },
    { name: "b", age: 2 },
    { name: "n", age: 3 },
    { name: "ff", age: 4 },
  ]);

  const addFriend = () => {
    friends.push("hh");
    setFriends(friends);
  };

  const incrementAgeWithIndex = (index) => {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  };

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={(e) => setFriends([...friends, "tom"])}>添加朋友</button>
      {/* 错误做法 */}
      <button onClick={(e) => addFriend()}>添加朋友</button>

      <h2>好友列表</h2>
      <ul>
        {students.map((item, index) => (
          <li key={index}>
            <span>名字:{item.name}</span>
            <span>年龄:{item.age}</span>
            <button onClick={(e) => incrementAgeWithIndex(index)}>age+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

MultiHookState.propTypes = {};

export default MultiHookState;
