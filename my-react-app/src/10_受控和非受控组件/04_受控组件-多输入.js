import React, { forwardRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = { username: "", password: "", valid: "" };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <br />

          <label htmlFor="username">
            密码：
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => this.handleChange(e)}
              value={this.state.password}
            />
          </label>
          <br />
          <label htmlFor="username">
            验证码：
            <input
              type="text"
              id="valid"
              name="valid"
              onChange={(e) => this.handleChange(e)}
              value={this.state.valid}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
}
