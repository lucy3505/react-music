import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    const location = this.props.location;
    console.log(location);
    return <div>detail3:{location.state.name}</div>;
  }
}
