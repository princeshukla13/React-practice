import React from "react";

function Display({ displayvalue }) {
  return (
    <div>
      <input type="text" id="display" disabled value={displayvalue} readOnly />
    </div>
  );
}

export default Display;
