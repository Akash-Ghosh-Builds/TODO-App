import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  const [editingTodo, setEditingTodo] = useState(null)

  return (
    <>
    <h1>Todo App</h1>
    <AddTodo
    editingTodo ={editingTodo}
    setEditingTodo = {setEditingTodo}/>
    <Todos
    setEditingTodo = {setEditingTodo}/>
    </>
  )
}

export default App
