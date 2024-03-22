import React from 'react'

function Random() {
    let num = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
              <h1 style={{"background-color":"yellow"}}>num is {num}</h1>
    </div>
  )
}

export default Random