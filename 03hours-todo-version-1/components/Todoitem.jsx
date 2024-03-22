import React from "react";
import Showsitem from "./Showsitem";

function Todoitem({ todos }) {
  return (
    <>
      {todos.map((item) => {
        return <Showsitem itemname={item.name} tododate={item.date} />;
      })}
    </>
  );
}

export default Todoitem;
