import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value : 0
}

// creating a slice

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        console.log('Increment action dispatched'); // Log action
        console.log('Previous State:', state.value); // Log previous state
        debugger
        state.value += 1;
        console.log('Updated State:', state.value); // Log updated state
      },
      decrement: (state) => {
        console.log('Decrement action dispatched');
        console.log('Previous State:', state.value);
        state.value -= 1;
        console.log('Updated State:', state.value);
      },
      reset: (state) => {
        console.log('Reset action dispatched');
        console.log('Previous State:', state.value);
        state.value = 0;
        console.log('Updated State:', state.value);
      },
    },
  });

//export actions 
export const { increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;