import { FC, memo, useEffect } from 'react'
import Task from './Task'

export type Todo = {
  id: number
  task: string
}

interface Props {
  todoList: Todo[]
  handleDelete: (id: number) => void
}

const List: FC<Props> = ({ todoList, handleDelete }) => {
  useEffect(() => {
    // This effect is executed every new render
    console.log('Rendering <List />')
  })
  return (
    <ul>
      {todoList.map(todo => (
        <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default memo(List)
