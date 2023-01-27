import React from 'react'
import "./style.css"
import Product from './cardList'
import TotalPrice from './totalPrice'
function AddToCart({ card }) {
  return (
    <div className='right'>
      <div className='menu-bar'>
        <p>You have {card.length} in the Cart</p>
      </div>
      {card.map(product => <Product key={product.id} product={product} />)}

      <TotalPrice card={card} />

    </div>
  )
}

export default AddToCart
