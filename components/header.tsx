import { ShoppingBag } from 'lucide-react'
import React from 'react'
import CartButton from './cart-button'

const Header =  () => {

  return (
    <header className="bg-white fixed top-0 left-0 w-full">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-black text-2xl" href="#">
                <h1>Greyball</h1>
            </a>

            
            <CartButton/>

                
            
        </div>
        </header>

  )
}

export default Header