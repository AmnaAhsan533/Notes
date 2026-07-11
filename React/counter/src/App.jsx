import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) // default value = 0

  //let counter = 5;

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
      
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
