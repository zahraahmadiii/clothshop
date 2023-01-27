import React from 'react'
import Filter from '../filter'
import "./style.css"
import ProductCard from '../productCard'
function Main({products}) {
  return (
    <div className='main'>
      <div className='left'>
      <Filter />

    <ProductCard products={products}/>


      </div>
    </div>
  )
}

export default Main