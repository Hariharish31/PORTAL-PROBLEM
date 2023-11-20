import React from 'react';

function Display(){
    return(
    <div>
        <h1>Nested component</h1>
    </div>
    )
}


export default function Nested() {
  return (
    <div><Display/></div>
  )
}
