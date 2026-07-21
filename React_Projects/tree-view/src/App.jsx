import { useState } from 'react'
import TreeView from './index'
import menus from './data'

function App() {
  return (
    <TreeView menus={menus}/>
  )
}

export default App
