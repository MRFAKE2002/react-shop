import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse h-auto mt-5 border-b ">
      <div className="shadow">
        <img
          className="w-32"
          src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg"
          alt=""
        />
      </div>
      <div className=" text-right m-4">
        <h1 className="text-xl font-bold my-2">عنوان محصول</h1>
        <span className="text-xl">قیمت محصول: 1,000 تومان</span>
        <div className="mt-5">
          <Button className="rounded-md p-1 mr-2" variant="danger">Remove</Button>
          <Button className="rounded-md p-1 mr-2" variant="primary">+</Button>
          <span>{2}</span>
          <Button className="rounded-md p-1 ml-2" variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
