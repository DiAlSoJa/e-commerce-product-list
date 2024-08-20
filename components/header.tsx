
import React from 'react'
import CartButton from './cart-button'
import Link from 'next/link'

const Header =  () => {

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-[999999]">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
            <Link className="block text-black text-2xl" href="/">
                <h1>Greyball</h1>
            </Link>
            <CartButton/>

        </div>
        </header>

  )
}

export default Header