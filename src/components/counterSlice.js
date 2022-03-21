import React from 'react'
import {createSlice, createReducer} from '@reduxjs/toolkit';

const  counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0
  },
  reducers: {
    increment:  (state) =>{
        state.value += 1;
    },
    decrement:  (state) =>{
      state.value -= 1;
  },
  incrementByAmout: (state, action) =>{
    state.value += action.payload;
  }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer



// export default counterSlice

