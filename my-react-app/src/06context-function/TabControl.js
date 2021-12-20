import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        {titles.map((title, index) => (
          <div
            key={title}
            className={`tab-item ${index === currentIndex ? "active" : ""}`}
            onClick={(e) => this.itemClick(index)}
          >
            {title}
          </div>
        ))}
      </div>
    );
  }

  itemClick(index) {
    this.setState({ currentIndex: index });
    const { onClick } = this.props;
    onClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired,
};
