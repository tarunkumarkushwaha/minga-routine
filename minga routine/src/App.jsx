import { useState } from 'react'
import './App.css'
import RoutineBuilder from './pages/RoutineBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutineBuilder/>
    </>
  )
}

export default App
