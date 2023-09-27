import React, { useEffect,useState } from 'react'
import axios from 'axios';
function AxiosEx() {
    let [todos,setTodos] = useState([]);
    useEffect(() => {
        (async () => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(res.data);
        })();
    });
    console.log("Execute");
  return (
    <div>
        Fetching Data 
        {todos.length==0? <h2>Loading..</h2>:
        <>
        <h2>todos</h2>
        <ul>
            {
                todos.map((todo,index) => { 
                    return <li key={index}>{todo.title}</li>
                }
                )
            }
        </ul>
        </>
       
        }
      
    </div>
  )
}


export default AxiosEx
