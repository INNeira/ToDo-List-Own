import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [todo, setTodo] = useState({ value: ''})
  const [todos, setTodos] = useState([])

  const {value} = todo;

  const handleTodo = (event) => {
    setTodo({ value: event.target.value})
  }

  const addTodo = (event) => {
    event.preventDefault()
    if(value === ''){
      alert('eu flaco esto esta vaciaso')
      return
    }
    setTodos([...todos, value])
    setTodo({ value: '' })
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((index) => index != id))
  }


  //TODO: en vez de eliminarlos, tacharlos con una clase de CSS
  //TODO: llevar todo a componentes
  return (
    <div className="App">
      <section className="welcome">
        Welcome to the ToDo List
      </section>
      <section className="form">
        <form action="">
          <label htmlFor="todo">ToDo: </label>
          <input value={todo.value} onChange={handleTodo} id="todo" type="text" />
          <button onClick={addTodo} className="addTodo">
            Add ToDo
          </button>
          <div>

          </div>
        </form>
      </section>

      <section className="list">
        <ul>
          {todos.map((el, i) =>
            <div key={i}>
              <li>
                {el} 
                <button onClick={() => deleteTodo(i)} className="deleteTodo">
                  Delete ToDo
                </button>
              </li>
            </div>)}
        </ul>
      </section>
    </div>
  )
}

export default App
