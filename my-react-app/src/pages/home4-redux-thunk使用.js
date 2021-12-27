import React from "react";
import axios from "axios";
import { subNum, getHomeMultidata } from "store/actionCreators";
import { connect } from "react-redux";
class Home extends React.PureComponent {
  componentDidMount() {
    // axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
    //   console.log(res);
    //   const data = res.data.data;
    //   console.log("轮播图:", data.banner.list);
    //   console.log("推荐:", data.recommend.list);
    //   this.props.changeBanner(data.banner.list);
    // });
    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <hr />
        <h1>home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={(e) => this.props.decrement(1)}>-1</button>
        <button onClick={(e) => this.props.decrement(5)}>-5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function (num) {
      dispatch(subNum(num));
    },
    getHomeMultidata: function () {
      dispatch(getHomeMultidata);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
