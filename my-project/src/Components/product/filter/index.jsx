import React from "react";
import Select from "../selectOption";
import "./style.css"
function Filter({ onOrderHandler, onPriceSortHandler }) {
  return (
    <div className="filter">
      <p>
        <span>6</span> Products
      </p>
      <Select lable='Price Sorting' onOrderHandler={onPriceSortHandler} options={['lowest', 'highest']} />
      <Select lable='Size' onOrderHandler={onOrderHandler} options={['all', 'xs', 's', 'm', 'l', 'xl']} />


    </div>
  );
}

export default Filter;