import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */} 
      {/* for the useReducer */}
      <FocusInput />
      {/* for the useRef */}

      <Timer />

    </>
  )
}

export default App
