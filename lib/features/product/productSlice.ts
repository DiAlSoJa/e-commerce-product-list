"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  value: number;
}

const initialState: ProductState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    next: (state) => {
      state.value += 1; 
    },
    before: (state) => {
      if (state.value > 0) state.value -= 1; 
    },
    reset: (state) => {
      state.value = 0; 
    },
  },
});

export const { next, before, reset } = productSlice.actions;

export default productSlice.reducer;