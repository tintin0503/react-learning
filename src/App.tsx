import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import List, { Todo } from './components/List'

const initialTodos: Todo[] = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos)
  const [task, setTask] = useState<string>('')

  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleCreate = () => {
    if (!!task) {
      const newTodo = {
        id: Date.now(),
        task
      }

      setTodoList([...todoList, newTodo])

      setTask('')
    }
  }

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <List todoList={todoList} />
    </>
  )
}

export default App
