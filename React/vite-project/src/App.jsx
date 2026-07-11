import Coffee from "./coffee"

function App() {
  const username = "Amna"
  return (
  <>  
    <Coffee/>  
    {/* we can return only one element
    to return multiple elements, we can return elements inside a main element or fragment(empty element) */}
    <h2>{username}</h2> {/* we can only inject variables, we can't write expressions inside curly braces */}
    <p>Paragraph</p>
  </>
  )
}

export default App
