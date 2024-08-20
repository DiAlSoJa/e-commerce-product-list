import React from 'react'
import Card from './card'
import { Product } from '@/types'

interface ProductListProps{
    products:Product[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 py-4 px-2">
        {products.map((product: Product) => (
            <Card key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList