import React, { forwardRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = { username: "" };
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
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  }
}
