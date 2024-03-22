import React from "react";
import Item from "./Item";
function Fooditem({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => {
          return <Item key={item} fooditem={item} />;
        })}
      </ul>
    </>
  );
}

export default Fooditem;
