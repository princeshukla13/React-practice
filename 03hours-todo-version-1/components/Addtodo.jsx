import React from 'react'

function Addtodo() {
  return (
    <div class="container text-center">
    <div class="row">
      <div class="col-sm-4">
        <input type="text" placeholder='ENTER TODO' />
      </div>
      <div class="col-sm-4">
        <input type="date"  />
      </div>
      <div class="col-sm-2">
      <button type="button" class="btn btn-success">ADD TODO</button>
      </div>
    </div>
    </div>
  )
}

export default Addtodo