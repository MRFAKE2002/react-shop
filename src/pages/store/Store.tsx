// libraries
import React from 'react'

// components
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'

function Store() {
  return (
    <Container>
      <h1 className="text-xl text-right my-4">محوصلات</h1>
      <div className="grid grid-cols-4 gap-5 mt-3">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

    </Container>
  )
}

export default Store
