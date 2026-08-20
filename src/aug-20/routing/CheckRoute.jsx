import React from "react";
import { Link } from "react-router-dom";

function CheckRoute() {
  return (
    <div>
      <h1>CheckRoute Page</h1>

      <Link to="/one">
        <button>CheckRoute</button>
      </Link>
    </div>
  );
}

export default CheckRoute;
