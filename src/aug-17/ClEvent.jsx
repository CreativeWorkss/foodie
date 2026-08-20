import React, { Component } from "react";

class ClEvent extends Component {
  handleClick() {
    alert("i have clicked the button");
  }
  render() {
    return (
      <div>
        <h1>Hello Event</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClEvent;
