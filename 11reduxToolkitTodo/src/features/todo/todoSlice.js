import {createSlice, nanoid } from '@reduxjs/toolkit';

// nanoid ye unique id generate karta hai.


const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


// sclice is almost a big version of reducer
// reducer is a functionality

// redux-toolkits me sirf declaration nahi likhte hai, hum defination likhte hai.
export const todoSlice = createSlice({
    // slice 3 inportant chij leta hai 1. name, 2. initialState 3. reducer
    name: 'todo',
    initialState,
    reducers: {
        // isme humesha state and action milega.
        // state ka matlab abhi hamare initialState me kya kya value hai un sabhi ka access milega.
        // state me current state ka jo bhi state rahega vo milega.
        // jo bhi data pass ho raha hai vo action me milega
        
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload    // payload ek object hai isme id,name etc. jo bhi define rahega vo milega
            }
            state.todos.push(todo)  // redux me state preserve rahta hai.isliye direct use kar sakte hai.
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            // filter jo bhi true value rahega vo deta hai.
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer