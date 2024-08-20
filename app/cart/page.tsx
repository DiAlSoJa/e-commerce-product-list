"use client"
import React from 'react';
import CartSummary from '@/components/cart-page/cart-summary';
import CartProduct from '@/components/cart-page/cart-product';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { ICartProduct } from '@/types';



const CartPage = () => {
  
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  console.log(cartItems);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-slate-500">Product</div>
          <p className="font-normal text-xl leading-8 text-slate-500 flex items-center justify-between">
           
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>
        <div className='bg-white rounded-xl mb-10'>
          {cartItems.map((product:ICartProduct) => (
            <CartProduct key={product.product.id} product={product} />
          ))} 

        </div>
        <CartSummary />
      
      </div>
    </section>
  );
};

export default CartPage;
