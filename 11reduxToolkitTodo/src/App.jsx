
// redux core library hai.
// react-redux redux ka implementation hai,wiring karne ke liye react aur redux ka,jisse react aur redux ka aapas me baat ho sake.
// redux toolkit bahut saare kaam automaticaly karta hai redux me.

/* redux toolkit kaise baante hai.

1. sabse pahle store banate hai. ek application me jyada tar(99.99%) ek hi store hota hai.jise single source 
   of truth bolte hai.

2. uske slice banate hai createSlice ka use karke.slice banane ke liye 3 chij chahiye,
    a. name,
    b. initialState,
    c. reducers

    reducer me 2 chij ke access milta hai
    i. state : state me updated state value in the store milta hai.
    ii. action : action me action.payload etc.. milta hai.
  
3. data send karne ke liye useDispatch() ka use karo.

4. data lene(select) karne ke liye useSelector() ka use karo.value(data) state se milega.

*/


/* dusre ka notes 

Redux toolkit ki notes
1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 

*/

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App