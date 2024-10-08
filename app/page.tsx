
import { Product, SortEnum } from "@/types";
import ActionBar from "@/components/action-bar";
import getProductsByPage from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Pagination from "@/components/pagination";



interface HomeProps {
  params: any;
  searchParams: {
    page: string;
    sort:string;
    search:string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const page = parseInt(searchParams.page, 10) || 1;
  const sortQuery = searchParams.sort as SortEnum || SortEnum.None;
  const search = searchParams.search|| "";
  
  const isSortValid = Object.values(SortEnum).includes(sortQuery as SortEnum);
  const isPageValid = page > 0;

  const { products, totalPages } = await getProductsByPage(9, page,sortQuery,search);


  return (
    <div className="py-5 px-4">
      <ActionBar
         sort={sortQuery}
         search={search} 
         />

      {(!isPageValid || !isSortValid|| products.length === 0)?
          <div className="text-center text-lg font-medium text-gray-700 mt-5">
            There are no products available.
         </div>
      :

        <ProductList products={products}/>

      }

      <Pagination
          page={page} 
          totalPages={totalPages}
          sort={sortQuery}
          search={search} 
      />
    </div>
  );
}
