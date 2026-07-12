import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPass] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPass(pass)

  }, [length, numAllowed, charAllowed, setPass])

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); 
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passGenerator()
  }, [length, numAllowed, charAllowed, setPass])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClip}
            className="bg-orange-500 text-white px-3 py-1 cursor-pointer hover:bg-orange-600 transition-all duration-300"
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2 mb-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNum((prev) => !prev)
              }}
              className='cursor-pointer'
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setChar((prev) => !prev)
              }}
              className='cursor-pointer'
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
