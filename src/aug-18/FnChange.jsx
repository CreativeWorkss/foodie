import React, { useState } from "react";

function FnChange() {
  const [name, setName] = useState("David");
  const handleChange = () => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>Name : {name}</h1>
      <input type="text" onChange={handleChange} value={name} />
    </div>
  );
}

export default FnChange;
