import React from "react";

import { subNum } from "store/actionCreators";
import { connect } from "@/utils/connect";
function About(props) {
  return (
    <div>
      <hr />
      <h1>about</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.decrement(1)}>-1</button>
      <button onClick={(e) => props.decrement(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function (num) {
      dispatch(subNum(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
