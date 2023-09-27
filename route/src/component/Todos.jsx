import axios from "axios";
import { useEffect, useState } from "react"

function Todos() {
    let [todo,setTodo] = useState([]);
    useEffect(()=>{
        (async()=>{
            let data = await axios.get('https://jsonplaceholder.typicode.com/todos');
            // console.log(data);
            setTodo(data.data);
        })();
    })
  return (
    <div>
        <h1>Todos</h1>

        {
            todo.length==0?<h1>Fetching</h1>:
            <>{

                todo.map((item,idx)=>{
                    return <li key={idx}>{item.title}</li> 
                })
            }
            </>
        }

      
    </div>
  )
}

export default Todos
