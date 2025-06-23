import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseEffectTest from './components /UseEffectTest'
import ComponentA from './components /testComponents/ComponentA'
import ComponentB from './components /testComponents/ComponentB'
// export const Data = useContext();

function App() {
  return ( 
    <div>
     
      {/* <UseEffectTest /> */}
      <ComponentA />
      component B 
      <ComponentB />
    </div>
  )
}

export default App
