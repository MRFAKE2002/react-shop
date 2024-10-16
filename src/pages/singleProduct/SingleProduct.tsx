// components
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function SingleProduct() {
  return (
    <Container>
      <div className="grid grid-cols-12 h-80 shadow mt-5 ">
        {/*
          ghesmat aks va dokme sabad kharid product.
          man inja baraye inke jaye 'div image' va 'div body' ro avaz konam oumadam az class 'order' estefade kardam ke tartib ro avaz konam.
        */}
        <div className="col-span-2 bg-sky-200 order-2 p-3">
          <img 
            className="border"
            src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg"
            alt=""
          />
          <div className="text-center ">
            <Button className="rounded-md w-full py-2 mt-6" variant="primary">
              اضافه به سبد خرید
            </Button>
          </div>
        </div>
        {/* 
          ghesmat badane product
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

