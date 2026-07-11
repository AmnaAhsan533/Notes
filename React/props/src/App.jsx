import { useState } from 'react'
import Card from './components/Card'
function App() {
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="text-3xl font-bold">Testing Tailwind</h1>
      <Card username="Amna"/>
      <Card username="John"/>
    </>
  )
}

export default App
