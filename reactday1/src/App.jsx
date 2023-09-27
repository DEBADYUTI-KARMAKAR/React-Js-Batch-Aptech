/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Hello from './component/Hello'

function App(props) {
  return (
    <div>
     <h1>
      Hello {props.msg}
      </h1> 
      <Hello m={"Parthib"} />
      <Hello m={"Rajdeep"} />
      <Hello m={"Ratul"} />
    </div>
  )
}

export default App
