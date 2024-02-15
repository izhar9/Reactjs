//https://www.devui.io/    DevUI is a comprehensive and easy-to-use open-source UI component library ( powered by TailwindCSS) designed to enhance your productivity as a developer

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "izhar",
    age: 23
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      {/* <Card name="izhar" someobj = {myObj} />   is tarike se ham object ya array ko props ke rup me pass kar sakte hai*/} 

      <Card name="izhar" btnText="click me" />

      <Card name="imam" btnText='Click me 2'/>
      <Card name="imam"/>   {/*ye defult props ko use kar raha hai jo ki hamene App.jsx me define kiya hai.  */}
    </>
  )
}

export default App