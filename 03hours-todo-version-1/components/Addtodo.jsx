import React, { useState } from "react";

function Addtodo({ onnewitem }) {
  const [todoname, settodoname] = useState();
  const [tododate, settododate] = useState();
  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };
  const handledatechange = (event) => {
    settododate(event.target.value);
  };
  const handlechangeclick = () => {
    onnewitem(todoname, tododate);
    settododate("");
    settodoname("");
  };
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-4">
          <input
            type="text"
            placeholder="ENTER TODO"
            value={todoname}
            onChange={handlenamechange}
          />
        </div>
        <div class="col-sm-4">
          <input type="date" value={tododate} onChange={handledatechange} />
        </div>
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={handlechangeclick}
          >
            ADD TODO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
