// libraries
import React from 'react'

// components
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'
import { Link } from 'react-router-dom'

function Store() {
  return (
    <Container>
      <h1 className="text-xl text-right my-4">محوصلات</h1>
      <div className="grid grid-cols-4 gap-5 mt-3">
        <Link to={`/product/${1}`} >
          <ProductItem />
        </Link>
        <Link to={`/product/${2}`} >
          <ProductItem />
        </Link>
        <Link to={`/product/${3}`} >
          <ProductItem />
        </Link>
        <Link to={`/product/${4}`} >
          <ProductItem />
        </Link>
        <Link to={`/product/${5}`} >
          <ProductItem />
        </Link>
        <Link to={`/product/${6}`} >
          <ProductItem />
        </Link>
      </div>

    </Container>
  )
}

export default Store
