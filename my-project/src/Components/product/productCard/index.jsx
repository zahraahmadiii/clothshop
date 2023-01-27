import React from 'react'
import './style.css'
function ProductCard({products,onAddToCard}) {
  return (
    <div className='card-section '>
      {products.map((item)=><div className='card'>
        <div><img src={item.img}></img><div/>
        <p>{item.title}</p>
        <div className='addToCard'><p>${item.price}</p>
        <button onClick={()=> onAddToCard(item)}>add to card</button>
        </div>
        </div>
        </div>)}
    </div>
  )
}

export default ProductCard