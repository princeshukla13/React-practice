import React from "react";

function ButtonCon({ onclickedbtn }) {
  const ButtonName = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "+",
    "-",
    "6",
    "7",
    "8",
    "*",
    "/",
    "9",
    "0",
    "=",
  ];
  return (
    <>
      <div class="row">
        {ButtonName.map((buttonname) => (
          <button className="clear" onClick={() => onclickedbtn(buttonname)}>
            {buttonname}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonCon;
