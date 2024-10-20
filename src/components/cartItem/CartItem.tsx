// libraries
import { useEffect, useState } from "react";

// components
import Button from "../button/Button";

// types
import { ICartItem, IProductsAPI } from "../../types/server";

// context functions
import { useCartContextValues } from "../../context/CartContext";

// API call functions
import { getProductObjectAPI } from "../../services/api";


function CartItem({id, quantity}: ICartItem) {

  const { handleIncreaseProductIntoCart, handleDecreaseProductIntoCart, removeProductFromCart } = useCartContextValues()

  const [productAPI, setProductAPI] = useState<IProductsAPI>()

  useEffect(() => {
    getProductObjectAPI(String(id)).then((product) => {
      setProductAPI(product)
    })
  
  }, [])
  


  return (
    <div className="flex flex-row-reverse h-auto mt-5 border-b ">
      <div className="shadow">
        <img
          className="w-32"
          src={productAPI?.imageUrl}
          alt=""
        />
      </div>
      <div className=" text-right m-4">
        <h1 className="text-xl font-bold my-2">{productAPI?.name}</h1>
        <span className="text-xl">قیمت محصول: {productAPI?.price} تومان</span>
        <div className="mt-5">
          <Button className="rounded-md p-1 mr-2" variant="danger" onClick={() => removeProductFromCart(id)}>حذف</Button>
          <Button className="rounded-md p-1 mr-2" variant="primary" onClick={() => handleIncreaseProductIntoCart(id)}>+</Button>
          <span>{quantity}</span>
          <Button className="rounded-md p-1 ml-2" variant="primary" onClick={() => handleDecreaseProductIntoCart(id)}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
