import React from 'react'
import "./style.css"
import Product from './cardList'
function AddToCart({card}) {
  return (
    <div className='right'>
        <div className='menu-bar'>
        <p>You have {card.length} in the Cart</p>
        </div>

       {card.map(product => <Product product={product}/>)}

    </div>
  )
}

export default  AddToCart
