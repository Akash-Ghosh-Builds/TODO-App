import { useState } from 'react'

import './App.css'
import AddTodo from '../../reduxToolkitTodo/src/Components/Addtodo'
import Todos from './Components/Todos'

function App() {


  return (
    <>
    <h1>Todo App</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
