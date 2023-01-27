import React from "react";
import "./style.css";
function Product({product}) {
  return (
    <div className="card-list">
      <div className="list-card-chooiced">
        <div className="img">
          <img
            className="picture"
            src={product.img}
          />
        </div>
        <div className="detail">
          <p>{product.title}</p>
          <div className="count">
            <p>{product.price} * {product.quantity}</p>
            <button>remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
