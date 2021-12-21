import React, { forwardRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = { fruit: "orange" }; //默认值
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select
            name="fruit"
            onChange={(e) => this.handleChange(e)}
            value={this.state.fruit}
          >
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橙子</option>
            <option value="pineapple">菠萝</option>
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.fruit);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ fruit: e.target.value });
  }
}
