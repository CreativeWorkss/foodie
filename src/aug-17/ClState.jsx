import React, { Component } from "react";

class ClState extends Component {
  constructor() {
    super();
    this.state = { name: "David" };
  }

  handleClick() {
    this.setState({ city: "Bangalore" });
  }

  render() {
    console.log("state is", this.state);
    return (
      <div>
        <h1>Name is {this.state.name}</h1>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default ClState;
