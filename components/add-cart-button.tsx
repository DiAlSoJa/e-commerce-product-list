"use client"
import { addProductToCart } from '@/lib/features/cart/cartSlice';
import { Product } from '@/types'
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
      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Add to cart
    </button>
  )
}

export default AddCartButton