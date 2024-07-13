import {useState} from 'react'
import './App.css';

export default function App() {
  const [todo,updateTodo]=useState("")
  const [todoList,setTodo]=useState([
    {
      id:1,
      todoItem:'html'
    },
    {
      id:2,
      todoItem:'css'
    }
  ])

  let newId=3

  

  function addNewItem(){
    if(todo===""){
      alert("add input value")
    }else{
      let newAddedValue=[
      ...todoList,
      {
      id:newId++,
      todoItem:todo
      }
    ]
    setTodo(
      newAddedValue
    )
    updateTodo("")
  }
  
}
  function onDeleteItem(id){
    let filterTodos=todoList.filter((each)=>{
      return(each.id!==id)

    })
    setTodo(filterTodos)
  }
 
return (
  <div className="App">
    <div className='input-group'>
    <input type="text"  value={todo} onChange={(e)=>{
      updateTodo(e.target.value)
    }}/>
    <button className="button" type="button" onClick={()=>{addNewItem()}}>add</button>
    </div>
    <ul className='list-group mt-5'>
      
        {todoList.map((each)=>{
          return(
          <li className='list-group-item'>
            <p>{each.todoItem}</p>
            <button className='btn' onClick={()=>{onDeleteItem(each.id)}}>❌</button>
          </li>
          )
        })
      
      
      }
    </ul>
  </div>
)
}
