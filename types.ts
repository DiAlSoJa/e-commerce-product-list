export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  
export interface ICartProduct{
  product:Product;
  amount:number;
}
export enum SortEnum {
    None="",
    Price = 'price',
    Rating = 'rating',
}