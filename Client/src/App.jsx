import { useState } from 'react'
import Home from './Components/homepage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Monkey.D.Luffy!</h1>
      

      <Home></Home>

    </>
  )
}

export default App
