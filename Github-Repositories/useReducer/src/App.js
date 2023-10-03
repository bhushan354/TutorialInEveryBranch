import React, {useState,useReducer} from "react";

// this reducer function will take current state(where our app currently at) && it will also take action(this action is what we pass into the dispatch function)
// so whatever we call dispatch with ,is going to get set to this action variable here and then our current state is going to be in the state variable here and the reducer is going o=to return the new updated state

function reducer(state, action) {
  switch (action.type){
    case 'increment' :
      return { count : state.count +1 }

    case 'decrement' :
      return{ count : state.count -1 }  

    default :
     return state
  }
}

export default function App(){

  const [state, /* dispatch function is what we call in order to update our state */ dispatch] = useReducer(reducer, /* this is initial state */{count:0})

  function increment() {
    dispatch({ type:'increment' })
  }

  function decrement() {
    dispatch({ type:'decrement' })
  }

  /*
  now we have used useReducer instead of this

  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

   function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  */

  return (
   <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}