import React from "react";
import Filter from "../filter";
import "./style.css";
import ProductCard from "../productCard";
import { useState } from "react";
import AddToCart from "../../addtocart";
import Modal from "../../modal/index"

function Main({ products }) {
  const [cart, setCart] = useState([]);
  const [AllProducts, setProducts] = useState(products)
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setmodalInfo] = useState()
  const addToCard = (item) => {
    // console.log(id);
    const newCard = [...cart]
    const existId = cart.findIndex((product) => product.id == item.id);
    if (existId >= 0) {
      // console.log(newCard[existId]);
      newCard[existId].quantity++
    } else {
      const newProduct = {
        ...item,
        quantity: 1
      }
      newCard.push(newProduct)
    }
    setCart(newCard)
  };

  const removeHandler = (id) => {
    const newCard = [...cart]
    const productIndex = cart.findIndex((product) => product.id == id);
    const product = cart[productIndex];
    if (product.quantity == 1) {
      newCard.splice(productIndex, 1)
    } else {
      newCard[productIndex].quantity--
    }
    setCart(newCard)
  }

  const orderHandler = (value) => {
    if (value == "all") {
      setProducts(products)
      return
    }
    const newProducts = products.filter(product => {
      if (product.size.includes(value)) {
        return product
      }
    })
    setProducts(newProducts)
  }

  const sortPriceHandler = (value) => {
    const newProducts = [...AllProducts];
    (value == "highest") ? (newProducts.sort((product1, product2) => product2.price - product1.price)) :
      (newProducts.sort((product1, product2) => product1.price - product2.price));

    setProducts(newProducts)
  }

  return (
    <div className="main">
      <div className="left">
        <Filter onPriceSortHandler={sortPriceHandler} onOrderHandler={orderHandler} />
        <ProductCard onAddToCard={addToCard} products={AllProducts} setShowModal={setShowModal} showModal={showModal} setmodalInfo={setmodalInfo}/>
      </div>
      <AddToCart onRemoveHandler={removeHandler} card={cart} />
      {showModal && <Modal modalInfo={modalInfo} onAddToCard={addToCard} setShowModal={setShowModal}/>}
    </div>
  );
}

export default Main;
