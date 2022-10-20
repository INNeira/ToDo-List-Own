import React from 'react'

function Form({todo, handleTodo, addTodo}) {
  return (
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
  )
}

export default Form