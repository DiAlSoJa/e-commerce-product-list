
import Card from "@/components/card";
import { Product } from "@/types";
import ActionBar from "@/components/action-bar";


export default async function Home() {

  const res = await fetch('https://fakestoreapi.com/products');
  const products= await res.json();

  
 

  return (
    <div className="py-5">
      <ActionBar
       
      />
      <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 py-4 px-2">
        {products.map((product: Product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}