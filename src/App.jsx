import { useState } from "react";
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, importantTodo, addTodo, deleteTodo } from "./redux/reducers/todo";

function App() {

  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)
  const [todo, setTodo] = useState('')

  return (
    <div className="App">
      <div>
        <input className="inpValue todoValue" onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
        <button type="button" onClick={() => {dispatch(addTodo(todo))
        setTodo('')
        }}>ADD</button>
        <div className="Find-sector">
          <input className="inpValue" type="search" />
          <h2 className="h2"></h2>
          <button>FIND</button>
        </div>
      </div>
      <ul>
        {
          todos.map((item) => (
            <div className="Todo-List"> 
              <li style={{magin: '20px 0', color: item.isImportant ? 'red' : ''}} key={item.id}>{item.title}
                <button type="button" style={{margin: '0 40px'}} onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button>
                <button type="button" style={{margin: '0 40px'}} onClick={() => {dispatch(importantTodo(item.id))}}>important</button>
                <button type="button" onClick={() => {dispatch(changeTodo(item.id, setTodo(item.title)))}}>change</button>
              </li>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
