import React, { PureComponent } from "react";
import { Navigate, Route } from "react-router-dom";
import { connect } from "react-redux";
class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>{this.props.isLogin ? <div>User</div> : <Navigate to="/about" />}</>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginInfo.isLogin,
});
export default connect(mapStateToProps, null)(User);
