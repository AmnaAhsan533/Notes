import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
  <>  
    <h1>Custom App | coffee</h1> 
  </>
  )
} 
// These functions convert into react elements then renders

/*
Can we directly pass reactElement objects rather than functions?
Since react provides it's own render method which has a particular syntax that's why our object is not rendering using react render method.
 
*/

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google'
) // the react render function accept this syntax

const anotherElement = ( 
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render( 
    
    <App />
)
