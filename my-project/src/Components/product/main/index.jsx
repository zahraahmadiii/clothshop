import React from "react";
import Filter from "../filter";
import "./style.css";
import ProductCard from "../productCard";
import { useState } from "react";
import AddToCart from "../../addtocart";
function Main({ products }) {
  const [cart, setCart] = useState([]);

  const addToCard = (item) => {
    // console.log(id);
    const newCard=[...cart]
  const existId = cart.findIndex((product) => product.id == item.id);
  if (existId>=0){
    // console.log(newCard[existId]);
   newCard[existId].quantity++
  }else{
    const newProduct = {
      ...item,
      quantity: 1
      }
      newCard.push(newProduct)
  }
  setCart(newCard)
  };
  return (
    <div className="main">
      <div className="left">
        <Filter />

        <ProductCard onAddToCard={addToCard} products={products} />
      </div>

         <AddToCart card={cart}/>
    </div>
  );
}

export default Main;
