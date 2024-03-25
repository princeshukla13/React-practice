import React from "react";
import Showsitem from "./Showsitem";

function Todoitem({ todos, handleondelete }) {
  return (
    <>
      {todos.map((item) => {
        return (
          <Showsitem
            itemname={item.name}
            tododate={item.date}
            handleondelete={handleondelete}
          />
        );
      })}
    </>
  );
}

export default Todoitem;
