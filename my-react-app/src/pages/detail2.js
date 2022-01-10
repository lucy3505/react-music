import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    const location = this.props.location;
    console.log(location.search);
    return <div>detail2:{location.search}</div>;
  }
}
