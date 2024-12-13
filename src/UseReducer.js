import React, { useReducer } from 'react'
import { increment } from './redux/counterSlice';


function counterReducer(state, action){
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
            break;
        case "decrement":
            return {count: state.count - 1}
            break
        default:
            break;
    }
}

function UseReducer() {
    const initialState = {count: 0}
    const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
    </div>
  )
}

export default UseReducer
