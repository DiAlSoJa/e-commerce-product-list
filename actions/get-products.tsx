import { Product, SortEnum } from "@/types";

interface ProductsResponse {
  products: Product[];
  totalPages: number;

}

const getProducts = async (limit: number, page: number,sort:SortEnum,search:string): Promise<ProductsResponse> => {

  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: Product[] = await res.json();

  //searching case-insensitive
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  //sorting by price or rating
  const sortedData = [...filteredData].sort((a, b) => {
    switch (sort) {
      case SortEnum.Price:
        return b.price - a.price;
      case SortEnum.Rating:
        return b.rating.rate - a.rating.rate;

      default:
        return 0;
    }
  });

  
  const totalProducts = sortedData.length;
  const totalPages = Math.ceil(totalProducts / limit);


  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  //pagination
  const paginatedProducts = sortedData.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    totalPages,
  };
};


export default getProducts;