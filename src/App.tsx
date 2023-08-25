import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
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
  const [term, setTerm] = useState('')

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

  const handleSearch = () => {
    setTerm(task)
  }
  const filteredTodoList = useMemo(
    () =>
      todoList.filter(todo => {
        console.log('Filtering...')
        return todo.task.toLowerCase().includes(term.toLowerCase())
      }),
    [todoList, term]
  )
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={!!term ? filteredTodoList : todoList} />
    </>
  )
}

export default App
