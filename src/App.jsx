import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import { List } from './components/List';

function App() {

  const [todo, setTodo] = useState({ value: '' })
  const [todos, setTodos] = useState([])

  const { value } = todo;

  const handleTodo = (event) => {
    setTodo({ value: event.target.value })
  }

  const addTodo = (event) => {
    event.preventDefault()
    if (value === '') {
      alert('eu flaco esto esta vaciaso')
      return
    }
    setTodos([...todos, { text: value, confirmed: false, id: Math.random() * 1000 }])
    setTodo({ value: '' })
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const handleConfirm = (itemId) => {
    console.log(itemId);
    setTodos(todos.map(item => {
      if (item.id === itemId) {
        return { ...item, confirmed: !item.confirmed }
      }
      return item;
    }))
  }

  return (
    <div className="App">
      <section className="welcome">
        Welcome to the ToDo List
      </section>

      <Form todo={todo} handleTodo={handleTodo} addTodo={addTodo} />

      <List todos={todos} deleteTodo={deleteTodo} handleConfirm={handleConfirm} />
    </div>
  )
}

export default App
