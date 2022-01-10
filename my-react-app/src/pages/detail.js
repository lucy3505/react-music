import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    const match = this.props.match;
    console.log(match.params.id);
    return <div>detail:{match.params.id}</div>;
  }
}
