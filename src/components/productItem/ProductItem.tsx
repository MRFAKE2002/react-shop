// types
import { IProductsAPI } from "../../types/server";

/* 
  ma bayad baraye gereftan data marbut be product az props biaim type oun props ro moshakhas konim.
  dalil in ke miaim type marbut be products ro dakhel ye type jadid mizarim ine ke shayad bekhaim ye chiz dige be props bedim.
*/
type TProduct = IProductsAPI;

function ProductItem({ name, description, price, imageUrl }: TProduct) {
  return (
    <div className="border shadow rounded">
      <img className="shadow rounded-md" src={imageUrl} alt="" />
      <div className="flex justify-between flex-row-reverse px-4 mt-3">
        <h1 className="text-sm line-clamp-1">{name}</h1>
        <span className="text-gray-500"> تومان {price}</span>
      </div>
      <p className="m-4 line-clamp-1 text-right text-gray-500">{description} </p>
    </div>
  );
}

export default ProductItem;
