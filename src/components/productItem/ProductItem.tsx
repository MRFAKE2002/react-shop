// libraries
import React from 'react'

function ProductItem() {
  return (
    <div className='border shadow rounded'>
      <img className='shadow rounded-md' src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />
      <div className='flex justify-between flex-row-reverse px-4 mt-3'>
        <h1 className='text-lg'>اسم محصول</h1>
        <span className='text-gray-500'>5000 تومان</span>
      </div>
      <p className='m-4 line-clamp-2 text-right'>
        این یک متن تستی برای نشان دادن اینکه این یک محصول است که در یک کامپوننت جدا قرار داره 
      </p>
    </div>
  )
}

export default ProductItem
