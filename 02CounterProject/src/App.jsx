import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)   // useState is responsible for changing state. chnage ka matlab ye nahi ki value update kar di,is change ko propagate kiya jata hai UI ke ander yani ke DOM ke ander.
  //let counter = 15
  const addValue = () => {
    //counter = counter + 1
    // setCounter(counter + 1)

    // interview question
    // setCounter((prevCounter) => prevCounter + 1) // ye callback funtion hai jo behind the sceane kamm karta hai useState ke setCounter me isi tarah niche bhi kiya bas () nahi lagaya hai.
                                                // ye previous value leta hai uske baad use update karta hai. aur jitne baar call karenge utne baar update karega value. normal way(line 10 ) se sirf 1 baar hi update hoga value,chahe use kitne baar bhi call karo 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    
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




// Next video summary
/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */
