import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeLogin } from "./../store/login";
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.isLogin);
  }
  handleLogin() {
    this.props.changeLogin(true);
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleLogin(e)}>login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginInfo.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (e) => dispatch(changeLogin(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
