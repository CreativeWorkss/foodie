import React from "react";

function DataInArray(props) {
  const { data } = props;
  console.log("value from parent", data);

  const ele = data.map((value) => {
    return (
      <div>
        <h1>Name : {value.name}</h1>
        <img src={value.url} />
      </div>
    );
  });

  return <div>{ele}</div>;
}

export default DataInArray;
