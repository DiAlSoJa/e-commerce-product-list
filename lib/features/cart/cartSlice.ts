"use client";

import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface CartItem {
  product: Product;
  amount: number;
}

export interface ProductState {
  cart: CartItem[];
}

const initialState: ProductState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.amount += 1;
      } else {
        state.cart.push({ product: action.payload, amount: 1 });
      }
      toast.success("Item added to the cart");
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.product.id !== action.payload);
      toast.success("Item removed from the cart");

    },
    updateProductAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const productToUpdate = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (productToUpdate) {
        productToUpdate.amount = action.payload.amount;
      }
      toast.success("Item updated");
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart cleared");

    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateProductAmount,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;