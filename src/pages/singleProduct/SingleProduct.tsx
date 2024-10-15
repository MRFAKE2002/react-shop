// libraries
import React from "react";

// components
import Container from "../../components/container/Container";

function SingleProduct() {
  return (
    <Container>
      <div className="grid grid-cols-12 h-80 shadow mt-5 ">
        {/*
          ghesmat aks va dokme sabad kharid product.
          man inja baraye inke jaye 'div image' va 'div body' ro avaz konam oumadam az class 'order' estefade kardam ke tartib ro avaz konam.
        */}
        <div className="col-span-2 bg-sky-200 order-2">
          <img 
            className="border"
            src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg"
            alt=""
          />
          <div className="text-center bg-slate-400">
            <button className="">اضافه به سبد خرید</button>
          </div>
        </div>
        {/* 
          ghesmat badane product.
        */}
        <div className="col-span-10 order-1 text-right">
          <h1 className="text-2xl font-bold m-3">نام محصول</h1>
          <span className="text-lg text-gray-600 m-3">قیمت: 5000 تومان</span>
          <p className="m-3">
            این یک متن تستی برای نشان دادن اینکه این یک محصول است که در یک
            کامپوننت جدا قرار داره این یک متن تستی برای نشان دادن اینکه این یک
            محصول است که در یک کامپوننت جدا قرار داره این یک متن تستی برای نشان
            دادن اینکه این یک محصول است که در یک کامپوننت جدا قرار داره این یک
            متن تستی برای نشان دادن اینکه این یک محصول است که در یک کامپوننت جدا
            قرار داره این یک متن تستی برای نشان دادن اینکه این یک محصول است که
            در یک کامپوننت جدا قرار داره
          </p>
        </div>
      </div>
    </Container>
  );
}

export default SingleProduct;

