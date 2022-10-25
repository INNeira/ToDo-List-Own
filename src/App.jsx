import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import { ToDoList } from './components/ToDoList';

// Chakra UI
import { Container, Heading } from '@chakra-ui/react'

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
      <Heading mb={5}>
        Welcome to the ToDo List
      </Heading>
      <Container>
        <Form todo={todo} handleTodo={handleTodo} addTodo={addTodo} />

        <ToDoList todos={todos} deleteTodo={deleteTodo} handleConfirm={handleConfirm} />
      </Container>

    </div>
  )
}

export default App
