"use client";

import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  const total = cart.reduce((acc, item) => acc + item.product.price * item.amount, 0).toFixed(2);

  return (
    <div className="bg-slate-50 rounded-xl p-6 w-full mb-8 ">
      <div className="flex items-center justify-between w-full py-6">
        <p className=" font-medium text-2xl leading-9 text-slate-900">Total</p>
        <h6 className=" font-medium text-2xl leading-9 text-indigo-500">${total}</h6>
      </div>
    </div>
  );
};

export default CartSummary;