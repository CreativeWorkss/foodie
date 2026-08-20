import React from "react";

function DataComponent(props) {
  console.log("properties are", props);
  const { name, city } = props;
  return (
    <div>
      <h1>Name : {name} </h1>
      <h2>City : {city} </h2>
    </div>
  );
}

export default DataComponent;
