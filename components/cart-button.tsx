"use client"
import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartButton = () => {
  return (
     
    <button onClick={()=>{}} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
            {10}

        </span>
    </button>
  )
}

export default CartButton