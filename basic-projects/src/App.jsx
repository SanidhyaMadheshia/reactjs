import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Meals from './components/Meals'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todo/> */}
      {/* <Meals/> */}
      <Calculator/>
    </>
  )
}

export default App
