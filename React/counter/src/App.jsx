import { useState } from 'react'
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
    <div className="counter-card">
      <h2>Counter App</h2>
      <h1>{counter}</h1>
      <button id="increment" onClick={addValue}>Increment</button>
      <button id="decrement" onClick={removeValue}>Decrement</button>
    </div>
  )
}

export default App
