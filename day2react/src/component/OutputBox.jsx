/* eslint-disable react/prop-types */
import React from 'react'

function OutputBox(props) {
    
    let listItems = props.listItems.map((item,index) => {
        return <li key={index}>{item}</li>
    })
    
  return (
    <div className='list_Container'>
      <ul>{listItems}</ul>
    </div>
  )
}

export default OutputBox
