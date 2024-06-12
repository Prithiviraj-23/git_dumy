import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

  <>
    <About/>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
