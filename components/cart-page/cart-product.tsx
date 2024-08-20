"use client";

import React, { useState } from 'react';
import { ICartProduct } from '@/types';
import { useDispatch } from 'react-redux';
import { updateProductAmount, removeProductFromCart } from '@/lib/features/cart/cartSlice';
import { Plus, Minus } from 'lucide-react'; // Asegúrate de instalar `lucide-react`
import Image from 'next/image';

interface CartProductProps {
  product: ICartProduct;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateProductAmount({ id: product.product.id, amount: product.amount + 1 }));
  };

  const handleDecrease = () => {
      if(product.amount - 1 < 1){
        dispatch(removeProductFromCart(product.product.id));
        return;
      }
      dispatch(updateProductAmount({ id: product.product.id, amount: product.amount - 1 }));
    
  };

  const handleRemove = () => {
    dispatch(removeProductFromCart(product.product.id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-slate-200 py-6 px-3">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="sm:h-[200px] flex items-center">
          <Image 
            height={200}
            width={200}
            src={product.product.image} 
            alt={product.product.title} 
            className="xl:w-[140px] rounded-xl w-full object-contain" /> 
        </div>
        <div className="pro-data w-full max-w-sm">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{product.product.title}</h5>
          <p className="font-normal text-lg leading-8 text-slate-500 my-2 min-[550px]:my-3 max-[550px]:text-center">{product.product.category}</p>
          <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">${product.product.price.toFixed(2)}</h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <div className="flex items-center w-full mx-auto justify-center">
          <button
            onClick={handleDecrease}
            className="group rounded-l-full px-6 py-[18px] border border-slate-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-slate-200 hover:border-slate-300 hover:bg-slate-50"
          >
            <Minus className="text-slate-900 transition-all duration-500 group-hover:text-black" />
          </button>
          <span
            className="border-y border-slate-200 outline-none text-slate-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-slate-900 py-[15px] text-center bg-transparent"
          >{product.amount}</span>
          <button
            onClick={handleIncrease}
            className="group rounded-r-full px-6 py-[18px] border border-slate-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-slate-200 hover:border-slate-300 hover:bg-slate-50"
          >
            <Plus className="text-slate-900 transition-all duration-500 group-hover:text-black" />
          </button>
        </div>
        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">${(product.product.price * product.amount).toFixed(2)}</h6>
        
      </div>
    </div>
  );
};

export default CartProduct;
