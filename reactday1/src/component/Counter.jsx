/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Counter() {

    let [count,setCount] = useState(0);


    const increaseCounter =() =>{
        console.log("increaseCounter");
        setCount(count+1);
    }

    const decreaseCounter =() =>{
        console.log("decreaseCounter");
        setCount(count-1);
    }
    console.log("Run");
  return (
    <div>
        <button onClick={increaseCounter}>+</button>
        <p>{count}</p>
        <button onClick={decreaseCounter}>-</button>
      
    </div>
  )
}

export default Counter
