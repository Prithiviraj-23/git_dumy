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
    <Home/>
    </>

   
  )
}

export default App
