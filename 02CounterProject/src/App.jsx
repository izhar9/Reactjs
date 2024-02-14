import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)   // useState is responsible for changing state. chnage ka matlab ye nahi ki value update kar di,is change ko propagate kiya jata hai UI ke ander yani ke DOM ke ander.
  //let counter = 15
  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Increase value {counter}</button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App  
