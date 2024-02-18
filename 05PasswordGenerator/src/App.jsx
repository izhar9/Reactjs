import { useState,useCallback, useEffect, useRef } from 'react'

/*
- useCallback is a React Hook that lets you cache a function definition between re-renders. 
ye do parameter leta hai ,1. function 2. dependencies(dependencies array[] ke form me hota hai)

- `useCallback` is like a memory-saving tool in React. It helps your components remember functions, 
so they don't have to recreate them every time your component rerenders. Instead, it reuses the same function from before,
 which saves memory and makes your component work faster. It's like reusing a tool instead of making a new one each time you need it, which is efficient!

*/


/* 
- `useEffect` is a React Hook that runs code in your functional component after the component has rendered. It is used to handle side effects in your components, 
such as fetching data, updating the DOM, or dealing with certain error conditions. 

- `useEffect` allows us to listen to lifecycle events of your component and helps in making our components more dynamic and useful.
(useEffect एक React Hook है जो रियल टाइम में तब काम करता है जब आपके कंपोनेंट में कोई परिवर्तन होता है। यह किसी प्रकार के साइड इफेक्ट को हैंडल करने के लिए उपयोगी है, 
जैसे कि डेटा लोड करना, डेटा रिफ्रेश करना, या किसी विशेष त्रुटि का उपचार करना। useEffect हमें आपके कंपोनेंट के लाइफसाइकल इवेंट्स को सुनने की सुविधा प्रदान करता है 
और इसे हमारे कंपोनेंट को और डायनामिक और उपयोगी बनाने में मदद करता है।)

- useEffect का उपयोग React में किया जाता है जब हमें कोई काम किसी विशेष समय पर करना होता है, जैसे कि किसी डेटा को लोड करना या डेटा को अपडेट करना। यह हमें कंपोनेंट के विभिन्न चरणों में काम करने की सुविधा देता है।

*/

/*
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
- useRef create a mutable variable which will not re-render the components
- with the help of useRef we can access a DOM element directly
- useRef ek object return karta hai.

*/

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

    //useRef hook
    const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1 ; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])  // useCallback ke dependencies me hum vo dependecy pass karte hai jis par hum depend hai aur vo dependecy possible hai ki run hoga, useCallback ke dependencies ka use method ko optimize karne ke liye hota hai

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])  // jo bhi dependencies(array ke form me) me pass kiye hai , agar usme se kisi me bhi kuch bhi change hoga to useEffect rerun hoga(jitne baar bhi change hoga utne baar rerun hoga)


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
  <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
