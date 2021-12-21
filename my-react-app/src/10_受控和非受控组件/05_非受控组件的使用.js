import React, { forwardRef, PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = { username: "", password: "", valid: "" };

    this.usernameRef = createRef();
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
              ref={this.usernameRef}
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
    console.log(this.usernameRef.current.value);
  }

  // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // }
}
