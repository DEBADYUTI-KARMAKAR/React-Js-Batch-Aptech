import React,{useState} from 'react'

function InputBox(props) {
    const [val,setVal] = React.useState("");
    const addTask = () => {
        console.log("Add Task"+val);
        props.acceptNewTask(val);
        setVal("");
    }
    const setInput =(e) =>{
        setVal(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div className='input_container'>
        
      <input type="text"
      value={val}
      onChange={setInput}
      />
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default InputBox
