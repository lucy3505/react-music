import React from "react";

import { subNum } from "store/counter";
import { connect } from "react-redux";
function About(props) {
  return (
    <div>
      <hr />
      <h1>about</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.decrement(1)}>-1</button>
      <button onClick={(e) => props.decrement(5)}>-5</button>
      <ul>
        {props.banner.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { counter: state.counterInfo.counter, banner: state.homeInfo.banner };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function (num) {
      dispatch(subNum(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
