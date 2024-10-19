// libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

// types
import { IProductsAPI } from "../../types/server";

// API call functions
import { getProductObjectAPI } from "../../services/api";

// context functions
import { useCartContextValues } from "../../context/CartContext";

function SingleProduct() {
  const productId = useParams<{ id: string }>();
  /* 
  console.log(productId);
  "
    {id: '3'}
  "
  */

  // in yani ma 'state' darim ke type 'IProductsAPI' yani yek object ke data product rush hast
  const [productObject, setProductObject] = useState<IProductsAPI | null>(null);

  /*
    ma inja miaim az 'useEffect' estefade mikonim ta az charkhe zendegi 'lifecycle React' estefade konim va API call anjam bedim.
    
    alan 'getProductObjectAPI' yek 'async function' ast ke yani yek 'promise' barmigardune yani ta zamani ke data kamel daryaft nashe
    'return' nemikone pas ma miaim az 'then' estefade mikonim.

    dar asl 'then' miad az natije nahayi 'zamani ke promise takmil shod' estefade mikone; amalan montazer mimune ta API call kamel 
    beshe va data 'return' shode ro dar 'productsAPI' barmigardune va function dakhelesh ro ejra mikone.
  */
  useEffect(() => {
    getProductObjectAPI(productId.id as string).then((productAPI) => {
      /*
        console.log(productAPI);
        "
          {id: '1', name: 'محصول اول', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
        "
      */

      /*
        vaghti data az API call bar migardan dar inja data ro be 'productAPI' ekhtesas mide va badesh 'function setProductObject' 
        farakhani mikone ke marbut be yek 'state' ast; in function data ro dakhel 'state productObject' gharar mide va component ro 
        'rerender' mikone ta data namayesh bede. 
      */
      setProductObject(productAPI);
    });
  }, []);

  const {
    cartItems,
    handleIncreaseProductIntoCart,
    handleDecreaseProductIntoCart,
    getProductQuantityFromCart,
  } = useCartContextValues();

  console.log(cartItems);

  return (
    <Container>
      <div className="grid grid-cols-12 h-60 shadow mt-5 ">
        {/*
          ghesmat aks va dokme sabad kharid product.
          man inja baraye in ke jaye 'div image' va 'div body' ro avaz konam oumadam az class 'order' estefade kardam ke tartib ro avaz konam.
        */}
        <div className="col-span-2 bg-sky-200 order-2 p-3">
          <img className="border" src={productObject?.imageUrl} alt="" />

          {/* 
            estefade az 'Ternary operator' ya if tak khat baraye namayesh 'button'
          */}
          {getProductQuantityFromCart(parseInt(productId.id as string)) ===
          0 ? (
            <div>
              {/*
                chon bayad 'id product' ro be 'context handleIncreaseProductIntoCart function' bedim bayad 'number' bashe pas az 'parsInt' estefade mikonim.
              */}
              <Button
                className="rounded-md w-full py-2 mt-6"
                variant="primary"
                onClick={() =>
                  handleIncreaseProductIntoCart(
                    parseInt(productId.id as string)
                  )
                }
              >
                اضافه به سبد خرید
              </Button>
            </div>
          ) : (
            <div className="flex justify-between mt-5">
              {/*
                chon bayad 'id product' ro be 'context handleIncreaseProductIntoCart function' bedim bayad 'number' bashe pas az 'parsInt' estefade mikonim.
              */}
              <Button
                className="rounded-md px-4 py-1"
                variant="primary"
                onClick={() =>
                  handleIncreaseProductIntoCart(
                    parseInt(productId.id as string)
                  )
                }
              >
                +
              </Button>
              <span className="flex">
                {getProductQuantityFromCart(parseInt(productId.id as string))}
              </span>
              {/*
                chon bayad 'id product' ro be 'context handleDecreaseProductIntoCart function' bedim bayad 'number' bashe pas az 'parsInt' estefade mikonim.
              */}
              <Button
                onClick={() =>
                  handleDecreaseProductIntoCart(
                    parseInt(productId.id as string)
                  )
                }
                className="rounded-md px-4 py-1"
                variant="danger"
              >
                -
              </Button>
            </div>
          )}

        </div>
        {/* 
          ghesmat body product
        */}
        <div className="col-span-10 order-1 text-right">
          <h1 className="text-2xl font-bold m-3">{productObject?.name}</h1>
          <span className="text-lg text-gray-600 m-3">
            قیمت: {productObject?.price} تومان
          </span>
          <p className="m-3">{productObject?.description}</p>
        </div>
      </div>
    </Container>
  );
}

export default SingleProduct;

// ChatGPT

// import React from 'react';

// interface ProductDetailsProps {
//   name: string;
//   price: number;
//   description: string;
//   features: string[];
//   imageUrl: string;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({
//   name,
//   price,
//   description,
//   features,
//   imageUrl,
// }) => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Grid for Product Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img src={imageUrl} alt={name} className="rounded-lg shadow-lg" />
//         </div>

//         {/* Product Information */}
//         <div className="flex flex-col justify-between">
//           <div>
//             {/* Product Name */}
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>

//             {/* Product Price */}
//             <p className="text-2xl font-semibold text-green-600 mb-4">${price.toFixed(2)}</p>

//             {/* Product Description */}
//             <p className="text-gray-600 mb-4">{description}</p>

//             {/* Product Features */}
//             <ul className="list-disc list-inside mb-4 text-gray-700">
//               {features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Buttons */}
//           <div className="flex space-x-4">
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>

//         {/* Review */}
//         <div className="bg-white p-6 rounded-lg shadow mb-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">John Doe</h3>
//             <p className="text-sm text-gray-500">October 10, 2024</p>
//           </div>
//           <p className="text-gray-700 mt-2">Great product! The quality is amazing and it exceeded my expectations.</p>
//         </div>

//         {/* Another Review */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">Jane Smith</h3>
//             <p className="text-sm text-gray-500">October 8, 2024</p>
//           </div>
//           <p className="text-gray-700 mt-2">Good value for the price. Would definitely recommend it to others.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
