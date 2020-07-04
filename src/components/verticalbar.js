import React, { Component } from "react";
import "../styles/verticalbar.css";
export class VerticalBar extends Component {
  render() {
    return (
      <div
        className={
          this.props.shade === "yellow"
            ? "vertical-container yellow"
            : "vertical-container"
        }
      ></div>
    );
  }
}

export default VerticalBar;
