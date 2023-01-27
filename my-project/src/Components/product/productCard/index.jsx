import React from 'react'
import './style.css'
function ProductCard({products,onAddToCard,setShowModal,showModal,setmodalInfo}) {
  
  return (
    <div className='card-section '>
      {products.map((item)=><div key={item.id} className='card'>
        <div 
        onClick={()=>{setShowModal(!showModal)
          setmodalInfo(item)
        }}
        ><img src={item.img}></img><div/>
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