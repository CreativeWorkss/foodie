import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello : {this.state.count}</h1>
        <p>ClassCounter</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassCounter;
