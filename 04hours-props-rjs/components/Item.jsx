import React from "react";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={` list-group-item ${bought && "active"}`}>
      <span className="">{foodItem}</span>
      <button className="btn btn-info" onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
