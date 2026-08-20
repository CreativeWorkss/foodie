import React, { Component } from "react";

class ClassBasic extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello class Name</h1>
        <h1>City Name</h1>
      </div>
    );
  }
}

export default ClassBasic;
