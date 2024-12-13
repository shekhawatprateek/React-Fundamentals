import React from 'react';
import { increment, decrement, reset } from './redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function ReduxCounterApp() {
    const count = useSelector((state) => {
        debugger
        state.counter.value
    })
    const dispatch = useDispatch()
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default ReduxCounterApp
