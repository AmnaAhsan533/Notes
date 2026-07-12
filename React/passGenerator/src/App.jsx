import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [pass, setPass] = useState("")

  const passGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str+= "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i<= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      password = str.charAt(char)
    }
    setPass(password)

  }, [length, num, char, setPass])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            placeholder='password'
            readOnly
          />
        </div>

      </div>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App
