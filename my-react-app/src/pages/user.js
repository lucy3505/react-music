import React, { PureComponent } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>{this.props.isLogin ? <div>User</div> : <Redirect to="/login" />}</>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginInfo.isLogin,
});
export default connect(mapStateToProps, null)(User);
