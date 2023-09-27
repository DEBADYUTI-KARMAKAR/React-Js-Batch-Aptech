import React from 'react'
function List() {
    let arr = ["Ram","Shyam","Hari","Gita","Sita"];
    let data = arr.map((item)=>{
        return <li>{item}</li>;
    })
  return (
    <div>
        <h1>List</h1>
      <ul>{data}</ul>
    </div>
  )
}

export default List
