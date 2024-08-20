"use client"
import { RootState } from '@/lib/store'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const CartButton = () => {

  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.amount, 0).toFixed(2);
  return (
    <div className='flex gap-3 items-center'>

      {totalPrice!=="0.00"&&(
        <div>
          <span className='font-bold'>Total:</span>
          <span>  ${totalPrice}</span>
        </div>
      )}
      <Link href={"/cart"} className="flex items-center rounded-full bg-black px-4 py-2">
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium text-white">
              {totalItems}
          </span>
      </Link>
    </div>
  )
}

export default CartButton