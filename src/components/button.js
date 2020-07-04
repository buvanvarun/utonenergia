import React, { Component } from "react";
import "../styles/button.css";

export class Button extends Component {
  render() {
    return (
      <div>
        <button
          id={this.props.id}
          className={this.props.active ? "btn active" : "btn"}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
