import React from "react";

function Showsitem({ itemname, tododate }) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-4">
          <p>{itemname}</p>
        </div>
        <div class="col-sm-4">
          <p>{tododate}</p>
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">
            delete TODO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showsitem;
