import React, { useState } from 'react'
import "./style.css"
import Product from './cardList'
import TotalPrice from './totalPrice'
import CheckoutForm from '../checkoutform'
function AddToCart({ card , onRemoveHandler}) {
  const [showCheckout, setShowCheckout] = useState(false)
  return (
    <div className='right'>
      <div className='menu-bar'>
        <p>You have {card.length} in the Cart</p>
      </div>
      {card.map(product => <Product  key={product.id} onRemoveHandler={onRemoveHandler} product={product} />)}

       <TotalPrice showCheckout={showCheckout} setShowCheckout={setShowCheckout} card={card} />
       
       {showCheckout && <CheckoutForm card={card}></CheckoutForm>}

    </div>
  )
}

export default AddToCart
