import React, { useEffect } from 'react'

function UseEfex() {

    useEffect(() => {
        console.log("useEffect");
    });
    console.log("Execute");
  return (
    <div>
        Fetching Data {console.log("Render")}
        Fetching Data {console.log("Render")}
      
    </div>
  )
}

export default UseEfex
