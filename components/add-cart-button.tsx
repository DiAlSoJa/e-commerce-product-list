"use client"
import { addProductToCart } from '@/lib/features/cart/cartSlice';
import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { useDispatch } from 'react-redux'

interface AddCartButtonProps {
  product: Product;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="text-white bg-slate-700 hover:bg-slate-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      <ShoppingCart/>
    </button>
  )
}

export default AddCartButton