import React, { useState } from 'react'
import InputBox from './component/InputBox'
import OutputBox from './component/OutputBox'
import UseEfex from './component/UseEfex';
import AxiosEx from './component/AxiosEx';

function App() {

  let [items,setItems] = useState([]);

  const acceptNewTask = (task) => {
    let newTask =[...items,task];
    setItems(newTask);
    console.log("addTask"+task);
  }
  return (
    <div>
      {/* <h1>TodoApp</h1>
      <InputBox acceptNewTask={acceptNewTask}/>
      <OutputBox 
      listItems={items}
      /> */}

      {/* <UseEfex/> */}

      <AxiosEx/>
    </div>
  )
}

export default App
