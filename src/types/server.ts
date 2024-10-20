// dar inja ma miaim type baraye API products besazim.

export interface IProductsAPI {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}


export interface ICartItem {
  id: number;
  quantity: number;
}
